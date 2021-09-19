import App from './App.svelte';
import './styles/reset.css';
import './styles/global.css';

const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
})