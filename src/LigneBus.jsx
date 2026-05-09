import './LigneBus.css';

function LigneBus({ numero, depart, arrivee, arrets, couleur, estSelectionnee, onClick }) {
  return (
    <div
      className={`ligne-bus ${estSelectionnee ? 'ligne-bus-active' : ''}`}
      onClick={onClick}
    >
      <div
        className="ligne-numero"
        style={{ backgroundColor: estSelectionnee ? '#e67e22' : (couleur || '#0a6e31') }}
      >
        {numero}
      </div>
      <div className="ligne-info">
        <span className="ligne-trajet">{depart} &rarr; {arrivee}</span>
        <span className="ligne-arrets">{arrets} arrêts</span>
      </div>
    </div>
  );
}

export default LigneBus;