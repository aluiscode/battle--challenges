import { Music } from './Music';
import { ChallengePrinter } from './plugins/ChallengePrinter';

const music = new Music({
  end: 100,
  plugins: [new ChallengePrinter()]
});
