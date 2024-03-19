export const CategoriesList = ({ categories, setActiveCategory, activeCategory }) => (
    <div className="categories">
        {categories.map(category => (
          <div key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? 'categories-item categories-item-selected' : 'categories-item'}>
            {category}
          </div>
        ))}
    </div>
  );