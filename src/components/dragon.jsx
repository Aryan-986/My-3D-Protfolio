import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';

const Dragon = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const dragonRef = useRef(null);
    const mixerRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const clock = useRef(new THREE.Clock());

    useEffect(() => {
        // Setup Camera
        cameraRef.current = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        cameraRef.current.position.z = 30;

        // Setup Renderer
        rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(rendererRef.current.domElement);

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        sceneRef.current.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(500, 500, 500);
        sceneRef.current.add(directionalLight);

        // Load Dragon Model
        const loader = new GLTFLoader();
        loader.load(
            '/dragon_flying.glb',
            (gltf) => {
                // Clean up existing dragon
                if (dragonRef.current) {
                    sceneRef.current.remove(dragonRef.current);
                }

                dragonRef.current = gltf.scene;
                dragonRef.current.scale.set(0.05, 0.05, 0.04);
                dragonRef.current.position.set(0.8, 1, 3);
                sceneRef.current.add(dragonRef.current);

                // Adjust material for the dragon
                dragonRef.current.traverse((child) => {
                    if (child.isMesh) {
                        child.material.color.set(0x999999); // Dark gray color
                        child.material.needsUpdate = true;
                    }
                });

                // Setup Animation
                mixerRef.current = new THREE.AnimationMixer(dragonRef.current);
                const action = mixerRef.current.clipAction(gltf.animations[0]);
                action.timeScale = 1.5; // Speed up the animation
                action.play();

                // Start Animating Model Movement
                handleModelMovement();
            },
            undefined,
            (error) => console.error('Error loading the dragon model:', error)
        );

        // Define Model Positions for Sections
        const sectionPositions = [
            { id: 'banner', position: { x: 1, y: -5, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
            { id: 'intro', position: { x: 1, y: -5, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
            { id: 'description', position: { x: -1, y: -5, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
            { id: 'contact', position: { x: 0.4, y: -7, z: -5 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
        ];

        const handleModelMovement = () => {
            if (!dragonRef.current) return;

            const sections = document.querySelectorAll('.section');
            let currentSection = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 3) {
                    currentSection = section.id;
                }
            });

            const activePosition = sectionPositions.find((pos) => pos.id === currentSection);

            if (currentSection === 'contact') {
                dragonRef.current.scale.set(0, 0, 0);
                return;
            }

            if (activePosition) {
                dragonRef.current.scale.set(0.05, 0.05, 0.04);

                // Animate position and rotation
                gsap.to(dragonRef.current.position, {
                    ...activePosition.position,
                    duration: 3,
                    ease: 'power1.out',
                });
                gsap.to(dragonRef.current.rotation, {
                    ...activePosition.rotation,
                    duration: 3,
                    ease: 'power1.out',
                });
            }
        };

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.current.getDelta();
            if (mixerRef.current) {
                mixerRef.current.update(delta);
            }
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        };
        animate();

        // Event Listeners
        const handleScroll = () => handleModelMovement();
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

            // Remove Dragon from Scene
            if (dragonRef.current) {
                sceneRef.current.remove(dragonRef.current);
                dragonRef.current.traverse((child) => {
                    if (child.isMesh) {
                        child.geometry.dispose();
                        child.material.dispose();
                    }
                });
            }

            // Remove Renderer
            if (rendererRef.current) {
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
