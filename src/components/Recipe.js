import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Recipe extends Component {
    render() {

        const ingredients = this.props.ingredients.map((ingredients, i) =>
            <li key={i}>{ingredients}</li>)
        const steps = this.props.steps.map((step, i) =>
            <li key={i}>{step}</li>)

        return (
            <div className="Recipe">
                <h2 className="title">{this.props.title}</h2>
                <h3 className="sub-title">Ingredients</h3>
            <ul className="ingredients-list">
                    {ingredients}
                </ul>
                <h3 className="sub-title">Steps</h3>
                <ol className="steps">
                    {steps}
                </ol>
            </div>
        )
    }
}

Recipe.propTypes = {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default Recipe;
