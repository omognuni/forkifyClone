import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _message = 'Start by searching for a recipe or an ingredient. Have fun!';
    _errorMessage = 'No recipes found';

    _generateMarkup() {
        return this._data.map(result => previewView.render(result, false))
            .join('');
    }
}

export default new ResultsView();