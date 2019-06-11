/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * card function
 *
 * A container for all types of content
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * The card  component
 *
 * @param {string}   link               - The link that clicking the card goes to
 * @param {string}   shadow             - Adds a box shadow to card if true
 * @param {string}   centered           - Aligns all text to center if true
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
const AUcard = ({ link, shadow, centered, className, children, ...attributesOptions }) => {
	let CardContainer = 'div';

	if( link !== undefined ) {
		CardContainer = 'a';
		attributesOptions.href = link;
		console.log(CardContainer);
	}

	return (
		<CardContainer className={`au-card ${className} ` +
								`${shadow ? 'au-card--shadow' : ''} ` +
								`${centered ? 'au-card--centered' : ''}`}
								{...attributesOptions}
								>
			{children}
		</CardContainer>
	)
};

AUcard.propTypes = {
	link: PropTypes.string,
	shadow: PropTypes.bool,
	centered: PropTypes.bool,
	className: PropTypes.string,
};

AUcard.defaultProps = {
	shadow: false,
	centered: false,
	className: ''
};


/**
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardInner = ({ className, children, ...attributesOptions }) => (
	<div className={`au-card__inner ${className}`} {...attributesOptions}>
		{children}
	</div>
);

AUcardInner.propTypes = {
	className: PropTypes.string
}

AUcardInner.defaultProps = {
	className: ''
}


/**
 * @param {string}   src                - Image source
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardImage = ({ src,className, ...attributesOptions }) => (
	<img className={`au-card__image ${className}`} src={ src } {...attributesOptions} />
);

AUcardImage.propTypes = {
	src: PropTypes.string.isRequired,
	className: PropTypes.string
};

AUcardImage.defaultProps = {
	className: ''
};


/**
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardDivider = ({ className, ...attributesOptions }) => (
	<hr className={`au-card__divider ${className}`} {...attributesOptions} />
);

AUcardDivider.propTypes = {
	className: PropTypes.string
};

AUcardDivider.defaultProps = {
	className: ''
};



/**
 * @param {string}   link               - The location of the link
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardLink = ({ link, text, className, ...attributesOptions }) => (
	<a href={link} className={`au-card__link ${className}`} {...attributesOptions}>
		{text}
	</a>
);

AUcardLink.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string
};

AUcardLink.defaultProps = {
	className: ''
};





/**
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardFooter = ({ children, className, ...attributesOptions }) => (
	<div className={`au-card__footer ${className}`} {...attributesOptions}>
		{children}
	</div>
);

AUcardFooter.propTypes = {
	className: PropTypes.string
};

AUcardFooter.defaultProps = {
	className: ''
};



/**
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardBody = ({ children, className, ...attributesOptions }) => (
	<div className={`au-card__body ${className}`} {...attributesOptions}>
		{children}
	</div>
);

AUcardBody.propTypes = {
	className: PropTypes.string
};

AUcardBody.defaultProps = {
	className: ''
};



export default AUcard;
