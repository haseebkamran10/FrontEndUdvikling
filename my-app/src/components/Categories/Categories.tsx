import './Categories.css'; // Ensure this is the correct path to your CSS file
import image1 from '../../Categories-bats.png';
import image2 from '../../Categories-gear.png';
import image3 from '../../Categories-shoes.png'

const categories = [
  { 
    name: 'Cricket Bats', 
    description: 'Find alt til Cricket Bats', 
    imageUrl: image1 // Ensure this path is correct
  },
  { 
    name: 'Cricket Shoes', 
    description: 'Find alt til Cricket Shoes', 
    imageUrl: image3 // Update with your actual image path
  },
  { 
    name: 'Cricket Gear', 
    description: 'Find alt til Cricket Gear', 
    imageUrl: image2 // Ensure this path is correct
  },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-card" key={category.name}>
          <img src={category.imageUrl} alt={category.name} className="category-image" />
          <div className="category-info">
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
