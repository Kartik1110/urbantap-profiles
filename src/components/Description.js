import React, { useState, useEffect } from 'react';

const DescriptionComponent = ({ description, editDescription, setEditDescription, handleDescriptionChange, updateBrokerField }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);

  useEffect(() => {
    const wordCount = description.trim().split(/\s+/).length;
    setShowExpandButton(wordCount > 20);
  }, [description]);

  const truncatedDescription = description.split(' ').slice(0, 20).join(' ');

  return (
    <div className={`card ${isExpanded ? "expanded" : "collapsed"} pt-2`}>
      {editDescription ? (
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className=""
          onBlur={() => {
            setEditDescription(false);
            updateBrokerField("info", description);
          }}
        />
      ) : (
        <>
          <div className="font-normal font-inter text-sm">
            {showExpandButton && !isExpanded ? `${truncatedDescription}...` : description}
          </div>
          {showExpandButton && (
            <button
              className="font-semibold font-inter mt-2 text-sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default DescriptionComponent;