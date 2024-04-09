import PropTypes from 'prop-types';
const SectionTitle = ({mainTitle,subTitle}) => {
    return (
        <div className="flex justify-center mt-20 mb-10">
            <div className="text-center">
                <p className="  text-gray-400">{subTitle}</p>
                <h1 className="text-4xl font-bold text-gray-600">{mainTitle}
                </h1>
            </div>
        </div>
    );
};

export default SectionTitle;
SectionTitle.propTypes = {
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
}