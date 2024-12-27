import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import { web } from '../assets';

const Dragon = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const dragonRef = useRef(null);
    const mixerRef = useRef(null);
    const rendererRef = useRef(new THREE.WebGLRenderer({ alpha: true }));
    const cameraRef = useRef(new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    ));
    const actionRef = useRef(null);
    let clock = new THREE.Clock();

    useEffect(() => {
        // Camera setup
        cameraRef.current.position.z = 30;

        // Renderer setup
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(rendererRef.current.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Increased intensity
        sceneRef.current.add(ambientLight);

        const topLight = new THREE.DirectionalLight(0xffffff, 2); // Increased intensity
        topLight.position.set(500, 500, 500);
        sceneRef.current.add(topLight);

        // Dragon loading
        const loader = new GLTFLoader();
        loader.load('/dragon_flying.glb',
            (gltf) => {
                // Check if a dragon already exists
                if (dragonRef.current) {
                    sceneRef.current.remove(dragonRef.current);
                }

                dragonRef.current = gltf.scene;
                dragonRef.current.scale.set(0.05, 0.05, 0.04);
                dragonRef.current.position.set(0.8, 1, 3);
                sceneRef.current.add(dragonRef.current);

                // Darken the dragon's color
                dragonRef.current.traverse((child) => {
                    if (child.isMesh) {
                        child.material.color.set(0x999999); // Dark gray color
                        child.material.needsUpdate = true; // Ensure material updates
                    }
                });

                mixerRef.current = new THREE.AnimationMixer(dragonRef.current);
                actionRef.current = mixerRef.current.clipAction(gltf.animations[0]);
                actionRef.current.timeScale = 1.5; // Increased speed for wing movement
                actionRef.current.play();
                modelMove();
            },
            undefined,
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );

        // Animation positions
        const arrPositionModel = [
            { id: 'banner', position: { x: 1, y: -5, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
            { id: "intro", position: { x: 1, y: -5, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
            { id: "description", position: { x: -1, y: -5, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
            { id: "contact", position: { x: 0.4, y: -7, z: -5 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
        ];

        const modelMove = () => {
            if (!dragonRef.current) return;

            const sections = document.querySelectorAll('.section');
            let currentSection;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 3) {
                    currentSection = section.id;
                }
            });

            const position_active = arrPositionModel.findIndex((val) => val.id === currentSection);

            if (currentSection == "contact"){
                dragonRef.current.scale.set(0, 0, 0);
                return;
            } else if (position_active >= 0) {
                dragonRef.current.scale.set(0.05, 0.05, 0.04);
                const new_coordinates = arrPositionModel[position_active];
                gsap.to(dragonRef.current.position, {
                    ...new_coordinates.position,
                    duration: 3,
                    ease: "power1.out"
                });

                gsap.to(dragonRef.current.rotation, {
                    ...new_coordinates.rotation,
                    duration: 3,
                    ease: "power1.out"
                });
            }
        };

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            const deltaTime = clock.getDelta();
            if (mixerRef.current) {
                mixerRef.current.update(deltaTime);
            }
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        };
        animate();

        // Event listeners
        const handleScroll = () => modelMove();
        
        const handleResize = () => {
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            
            // Remove dragon from scene on cleanup
            if (dragonRef.current) {
                sceneRef.current.remove(dragonRef.current);
                dragonRef.current.geometry.dispose(); // Dispose geometry if necessary
                dragonRef.current.material.dispose(); // Dispose material if necessary
            }

            if (containerRef.current && rendererRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
            }
            
            if (mixerRef.current) {
                mixerRef.current.stopAllAction();
            }
        };
    }, []);

    return <div ref={containerRef} id="container3D" />;
};

export default Dragon;
