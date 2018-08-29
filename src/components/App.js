import React, { Component } from 'react';
import Recipe from './Recipe'
import Navigation from './Navigation'

class App extends Component {
    constructor(props) {
        super(props)
        this.selectNewRecipe = this.selectNewRecipe.bind(this)
        this.state = {
            recipes: [
                {
                    title: "Bagel",
                    ingredients: [
                        "1 Bagel",
                        "Budda",
                    ],
                    steps: [
                        'Cut that bagel any way you want.',
                        'Put that Budda on it!',
                        'Eat cho bagel'
                    ],
                    id: "bagel"
                },
                {
                    title: "Pizza",
                    ingredients: [
                        'Cheese',
                        'Meats',
                        'Doughs',
                        'Happiness',
                    ],
                    steps: [
                        'Put all of it on the dough',
                        'Make sure it is a circle yo',
                        'Put it in da oven',
                        "Now eat it, it's lovin'",
                    ],
                    id: "pizza"
                },
                {
                    title: "Cereal",
                    ingredients: [
                        "box o' crunchies",
                        "Milk from the cow",
                        "Bowl"
                    ],
                    steps: [
                        "Put the crunhies in the bowl.",
                        "Pour that cow goodies all over it.",
                        "Listen to it SNAP, CRACKLE, and POP!",
                        "Get fat."
                    ],
                    id: "cereal"
                },
            ],
            selectedRecipe: null,
        }
    }

    selectNewRecipe(recipeId) {
        if(recipeId) {
            this.setState({
                ...this.state,
                selectedRecipe: recipeId
            })
        }
    }

    componentDidMount() {
        const recipeToShow = this.state.recipes[0].id || null
        this.setState ({
            ...this.state,
            selectedRecipe: recipeToShow
        })
    }

    render() {
        let recipeToSelect

        if(this.state.selectedRecipe) {
            const filteredRecipes = this.state.recipes.filter((recipe) =>
                recipe.id === this.state.selectedRecipe)
            if(filteredRecipes.length > 0) {
                recipeToSelect = filteredRecipes[0]
            }
        }




        return (
            <div className="App">

                <div className="sidebar">
                    <h1 className="sidebar-title">React Recipe Book</h1>
                    <Navigation
                        recipes={this.state.recipes}
                        recipeToSelect={this.selectNewRecipe}
                        activeRecipe={this.state.selectedRecipe}
                    />
                </div>


                {
                    recipeToSelect ?
                        <Recipe
                            title={recipeToSelect.title}
                            ingredients={recipeToSelect.ingredients}
                            steps={recipeToSelect.steps}
                        />
                    :
                    null
                }

            </div>
        );
    }
}

export default App;
