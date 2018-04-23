import * as React from 'react';

interface CourseNameProps {
  courseName: string;
}

export class CourseName extends React.PureComponent<CourseNameProps> {
  constructor(props: CourseNameProps) {
    super(props);
  }

  render() {
    return <p>This pure component was created as a part of { this.props.courseName }</p>;
  }
}