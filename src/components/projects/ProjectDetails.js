import React from 'react';
const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return ( 
        <div className="section container project-details">
            <div className="card z-depth-0">
                <div className="card-title">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe omnis dolorum nostrum repudiandae autem expedita voluptate ex numquam fugit ipsam. Labore ipsa quasi laboriosam nemo qui non dolorem omnis accusamus.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By AR</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;