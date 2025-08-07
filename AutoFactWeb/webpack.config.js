import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    'shoelace/shoelace.bundle': './src/shoelace/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'wwwroot/lib'),
    clean: true
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
    ]
  },
  mode: 'production',
  devtool: false
};