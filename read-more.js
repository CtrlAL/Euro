class ReadMore {
    _element;
    _status;
    reviewTextElement;
    default_height = `${0}px`;

    _statusListName = [
        'hidden',
        'active'
    ];
    constructor(element, status, reviewTextElement, gradElement) { // Put on constructor DOM element and status!
        // if (status !== 'hidden' || status !== 'active') return new Error(`Status unset`);
        this.element = element;
        this.status = status;
        this.reviewTextElement = reviewTextElement;
        this.default_height = `${this.reviewTextElement.offsetHeight}px`;
        this.gradElement = gradElement;
    }

    set element(value){
        this._element = value;
    }

    get element(){
        return this._element;
    }

    set status(value){
        this._status = value;
    }

    get status(){
        return this._status;
    }

    switchStatus(){
        switch (this._status) {
            case 'hidden':
                this.status = this._statusListName[1];
                this.reviewTextElement.style.height = `${this.reviewTextElement.scrollHeight}px`;
                this.gradElement.style.display = 'none';
                break;
            case 'active':
                this.status = this._statusListName[0];
                this.gradElement.style.display = 'block';
                this.reviewTextElement.style.height = this.default_height;
                break;
        }
    }

    _isOverflowed(){
        return this.reviewTextElement.scrollWidth > this.reviewTextElement.offsetWidth || this.reviewTextElement.scrollHeight > this.reviewTextElement.offsetHeight;
    }

    init() {
        if (this._isOverflowed()){
            this.reviewTextElement.style.overflow = 'hidden';
            this.element.style.display = 'block';
            this.gradElement.style.display = 'block';
        }
    }

}

const reviewTextAll = document.querySelectorAll('.review-text');
const readGrad = document.querySelectorAll('.linear-grad-2');
const readMoreAll = document.querySelectorAll('.read-more');

let arrInstances = [];

readMoreAll.forEach((element, index) => {
    arrInstances.push(
        new ReadMore(element, 'hidden', reviewTextAll[index], readGrad[index])
    );
})

arrInstances.forEach((elem) => {
    elem.init();
    elem.element.addEventListener('click', () => {elem.switchStatus()});
});