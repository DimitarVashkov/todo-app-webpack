import header from './header';
import footer from './footer';
import { content, main} from './content';

const body = document.querySelector('body');
body.append(header());


body.append(content());
body.append(main());

body.append(footer());
