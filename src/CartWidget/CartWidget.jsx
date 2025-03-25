import "./CartWidget.css";

const CartWidget = () => {
  const imgLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRn3vKACcvnIG3wCSKsvQ5Pg4fj_AdZb64w&s.png"; 

  return (
    <div>
      <img className="imgLogo" src={imgLogo} alt= "imagen de un zapato"/>
    </div>
  );
};

export default CartWidget;

