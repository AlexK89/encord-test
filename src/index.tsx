import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import 'typeface-roboto';
import './index.css';
import App from 'App';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
