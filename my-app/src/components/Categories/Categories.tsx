import '../Categories/Categories.css';
import image1 from '../../images/category1.png';
import image2 from '../../images/category2.png';
import image3 from '../../images/category3.png';

const categories = [
  { 
    name: 'Cricket Bats', 
    description: 'Find alt til Cricket Bats', 
    imageUrl: image1 
  },
  { 
    name: 'Cricket Shoes', 
    description: 'Find alt til Cricket Shoes', 
    imageUrl: image3 
  },
  { 
    name: 'Cricket Gear', 
    description: 'Find alt til Cricket Gear', 
    imageUrl: image2 
  },
];

const Categories: React.FC = () => {
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