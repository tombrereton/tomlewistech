import React from 'react';
import HighlightText from '../HighlightText/HighlightText';
import { css } from "react-emotion";

const aboutContainer = css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    padding: "1em",
    color: "#727373"
});

const About = () => (
    <div className={aboutContainer}>
        <HighlightText color="#C5EBF1" text="About me" type="h1" />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor felis rutrum orci ullamcorper luctus. Proin sed ornare nisl. Nulla sagittis sem a cursus hendrerit. Maecenas id justo mauris. Mauris viverra tortor eu malesuada aliquet. Etiam viverra mollis sem, eu gravida risus venenatis eu. Etiam id enim sit amet arcu bibendum dapibus eu vitae risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur semper massa bibendum mauris pharetra sollicitudin. Suspendisse id mauris metus. In cursus dolor nec eleifend bibendum.

            Donec faucibus dolor eu dolor lobortis feugiat. Sed eu neque placerat, rhoncus sem quis, fringilla arcu. Nullam urna arcu, elementum eu euismod a, aliquam sit amet nisl. Morbi venenatis est non ligula consequat venenatis. Ut iaculis massa augue. Aenean lacinia ac odio a laoreet. Aliquam imperdiet lobortis tellus a facilisis. Etiam consectetur orci ante, et bibendum mauris interdum non. Nullam eleifend, velit nec convallis lacinia, mi nibh pulvinar tortor, non laoreet dolor massa sed magna. Maecenas vitae sagittis lacus, in tincidunt arcu. Mauris varius tempus tortor. Mauris sollicitudin lacinia ante vitae porta. Etiam feugiat ligula mattis ex pulvinar, molestie cursus sem maximus. Nullam diam ligula, auctor vitae neque at, semper semper diam. Mauris imperdiet sem quis ultrices ornare.
</p>
    </div>
);

export default About;