// import the library
import {library} from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faHeart as faHeartActive, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';

library.add(
    faHeartActive,
    faHeartInactive,
    faCoffee
);