import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";

const Languages = () => {
  const languages = [
    {
      _id: "1",
      title: "English",
      progress: 75
    },
    {
      _id: "2",
      title: "Urdu",
      progress: 95
    },
    {
      _id: "3",
      title: "Hindi",
      progress: 80
    },
    {
      _id: "4",
      title: "Pashto",
      progress: 100
    },
  ]
  return (
    <div style={{marginTop: "2rem"}}>
        <h3>LANGUAGES</h3>
        {languages.map((element) => {
          return (
            <div key={element._id} className="progressBar">
              <p>{element.title}</p>
              <span>
                <FaRegDotCircle
                  style={{
                    right: `${
                      element.progress > 85 ? 0 : 100 - element.progress
                    }`,
                  }}
                />
              </span>
            </div>
          );
        })}
    </div>
  )
}

export default Languages
