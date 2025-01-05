import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Media = () => {
  const iconStyle = {
    color: '#eef8ce',
    transition: 'transform 0.3s ease, color 0.3s ease',
    textDecoration: 'none',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.2)';
    e.currentTarget.style.color = '#d1ff48';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.color = '#eef8ce';
  };

  return (
    <div className="media-container" style={{ textAlign: 'center', marginTop: '2em' }}>
      <h2 style={{ fontSize: '2em', color: '#d1ff48' }}>You Can Connect with Me On:</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5em', marginTop: '1em' }}>
        <a
          href="https://www.facebook.com/aryan.karki.50115"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={iconStyle}
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://www.instagram.com/aryan_jungk/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={iconStyle}
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-karki-5bb462318/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={iconStyle}
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://github.com/Aryan-986"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={iconStyle}
        >
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default Media;
