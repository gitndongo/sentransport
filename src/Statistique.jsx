import './Statistique.css';

function Statistique() {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <span className="stat-chiffre">10</span>
        <span className="stat-label">Lignes</span>
      </div>
      <div className="stat-card">
        <span className="stat-chiffre">150</span>
        <span className="stat-label">Arrêts</span>
      </div>
      <div className="stat-card">
        <span className="stat-chiffre">42</span>
        <span className="stat-label">Bus actifs</span>
      </div>
    </div>
  );
}

export default Statistique;