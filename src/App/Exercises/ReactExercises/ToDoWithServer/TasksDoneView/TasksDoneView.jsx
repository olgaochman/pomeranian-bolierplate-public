import './styles.css';

export const TasksDoneView = () => {
  return (
    <div>
      <p className="tdv-header">Tutaj znajdziesz liste swoich zadań</p>

      <div className="tvd-items">
        <p className="tvd-text">
          Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.
        </p>
        <button className="tvd-button">DODAJ ZADANIE</button>
      </div>
    </div>
  );
};
