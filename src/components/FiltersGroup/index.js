import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    categoryId,
    ratingId,
    onSearch,
    onClear,
  } = props

  const categoryFunc = obj => {
    const onSelectCategory = () => {
      categoryId(obj.categoryId)
    }

    return (
      <li key={obj.categoryId}>
        <p onClick={onSelectCategory}>{obj.name}</p>
      </li>
    )
  }

  const ratingFunc = obj => {
    const onSelectRating = () => {
      ratingId(obj.ratingId)
    }

    return (
      <li key={obj.ratingId}>
        <button type="button" onClick={onSelectRating}>
          <img
            alt={`rating ${obj.ratingId}`}
            src={obj.imageUrl}
            className="rating"
          />{' '}
          &up
        </button>
      </li>
    )
  }

  const renderFilters = () => (
    <div>
      <div>
        <h1>Category</h1>
        <ul>{categoryOptions.map(obj => categoryFunc(obj))}</ul>
        <h1>Rating</h1>
        <ul>{ratingsList.map(obj => ratingFunc(obj))}</ul>
      </div>
    </div>
  )

  return (
    <div className="filters-group-container">
      <input type="search" onKeyDown={onSearch} placeholder="Search" />
      {renderFilters()}
      <button className="clear" type="button" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
