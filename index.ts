import { Music } from './src/Music';
import { ChallengePrinter } from './src/plugins/ChallengePrinter';

const music = new Music({
  end: 100,
  plugins: [new ChallengePrinter()]
});
