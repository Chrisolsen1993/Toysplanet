const { Category } = require("../../../../server/models");
const { QUERY_CATEGORIES } = require("../../utils/queries");

return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={this.state.value} onChange={this.handleChange}>
        {categories.map((item) => (
              <option value={item.name}
              >
                {item.name}
              </option>
            ))}

        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
)