import "./Categories.css";
const Categories = () => {
  const categories = [
    {
      name: "Top offers",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/085406bae47866d5.png?q=100",
    },
    {
      name: "Mobiles & Tablets",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/64f1cc66052c66ef.png?q=100",
    },
    {
      name: "Electronics",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/1fd83847b32a09d1.png?q=100",
    },
    {
      name: "TVs & Appliances",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6c0716819ac55121.png?q=100",
    },
    {
      name: "Fashion",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6dbed7ba5417672f.jpg?q=100",
    },
    {
      name: "Beauty",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/c444de48eb75d450.png?q=100",
    },
    {
      name: "Home & Kitchen",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/f9c7aaa5f5455ae7.png?q=100",
    },
    {
      name: "Furniture",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/26e11f4698473e49.png?q=100",
    },
    {
      name: "Flights",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/8abe0a348a71d745.png?q=100",
    },
    {
      name: "Grocery",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/022cf9a62e8bd22c.png?q=100",
    },
  ];
  return (
    <div className="categoriesContainer">
      <div className="imgTextContainer">
        {categories.map((category) => (
          <div className="mapInner"  key={category.name}>
            <div className="imgContainer">
              <img
                className="img"
                src={category.img}
                key={category.name}
              />
            </div>

            <span className="text">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
