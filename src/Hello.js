import './Hello.css';

function Hello(props) {
  return (
    <div className="f1 tc">
      <header className="Hello-header">
        <h1>Deepanshu Kumar</h1>
        <p>Welcome to the Hell of Development </p>
        <h6>{props.greeting}</h6>
    	
      </header>
    </div>
  );
}

export default Hello;
