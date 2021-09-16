import { Component } from '../../../core/Component';
import './Product.scss';

export class Product extends Component {
    constructor(options = {}) {
        super({
            tagName: 'div'
        });
    }
}
