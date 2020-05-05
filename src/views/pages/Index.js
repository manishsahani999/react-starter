import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { __ROUTE_LOGIN } from "support/helpers";

const Index = () => (
  <>
    <div
      className="page-header index-header"
      style={{ background: "white", position: "relative" }}
    >
      <Tape options={{ fill: "#e8e8e8", position: "absolute", left: "-15%", top: "-20%" }} />
      <Message options={{ fill: "#e8e8e8", position: "absolute", right: "-1%", bottom: "-2%" }} />
      <Container style={{ zIndex: 1 }}>
        <div className="motto">
          <div>
            {/* <Icon /> */}

            <span className="text-super">
              kickstart
            </span>
          </div>
          <h1 className="font-for-motto text-left">
            Starter template for <span className="text-danger">React</span> Redux Projects
          </h1>
          <h4 className="text-dark mb-5 f-anon">
            This is the starter template for my hackathons.
          </h4>
          <Link to={__ROUTE_LOGIN}>
            <Button
              className="btn-round mr-1"
              color="dark"
              outline
              size="lg"
              type="button"
            >
              <span className="text-dark">Login</span>
            </Button>
          </Link>
          <Link to={__ROUTE_LOGIN}>
            <Button
              className="btn-round mr-1"
              color="danger"
              size="lg"
              type="button"
            >
              <span className="">Dashboard</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  </>
);

const Tape = ({ options }) => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="512" height="512"
    viewBox="0 0 128 128"
    style={options}
  > <path d="M 32 48 C 24.8 48 19 53.8 19 61 L 19 114 C 19 116.58365 19.75649 118.9802 21.046875 121 L 18 121 C 16.3 121 15 122.3 15 124 C 15 125.7 16.3 127 18 127 L 32 127 L 54 127 L 112 127 C 119.2 127 125 121.2 125 114 L 125 61 C 125 53.8 119.2 48 112 48 L 32 48 z M 32 54 L 112 54 C 115.9 54 119 57.1 119 61 L 119 114 C 119 117.9 115.9 121 112 121 L 105.5957 121 L 100.40039 109.90039 C 99.500391 108.10039 97.800781 107 95.800781 107 L 48.199219 107 C 46.299219 107 44.499219 108.10039 43.699219 109.90039 L 38.425781 121 L 32 121 C 28.1 121 25 117.9 25 114 L 25 61 C 25 57.1 28.1 54 32 54 z M 35 61.5 A 2 2 0 0 0 33 63.5 A 2 2 0 0 0 35 65.5 A 2 2 0 0 0 37 63.5 A 2 2 0 0 0 35 61.5 z M 110 61.5 A 2 2 0 0 0 108 63.5 A 2 2 0 0 0 110 65.5 A 2 2 0 0 0 112 63.5 A 2 2 0 0 0 110 61.5 z M 45 79.5 A 8 8 0 0 0 37 87.5 A 8 8 0 0 0 45 95.5 A 8 8 0 0 0 53 87.5 A 8 8 0 0 0 45 79.5 z M 99 79.5 A 8 8 0 0 0 91 87.5 A 8 8 0 0 0 99 95.5 A 8 8 0 0 0 107 87.5 A 8 8 0 0 0 99 79.5 z M 6 121.07422 C 5.225 121.07422 4.4503906 121.35039 3.9003906 121.90039 C 3.3003906 122.40039 3 123.2 3 124 C 3 124.8 3.3003906 125.59961 3.9003906 126.09961 C 4.4003906 126.69961 5.2 127 6 127 C 6.8 127 7.5996094 126.69961 8.0996094 126.09961 C 8.6996094 125.59961 9 124.8 9 124 C 9 123.2 8.6996094 122.50039 8.0996094 121.90039 C 7.5496094 121.35039 6.775 121.07422 6 121.07422 z"></path></svg>
);

const Message = ({ options }) => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="240" height="240"
    viewBox="0 0 128 128"
    style={options}
  > <path d="M 24 1 C 16.8 1 11 6.8 11 14 L 11 79 C 11 86.2 16.8 92 24 92 L 92.800781 92 L 111.90039 111.09961 C 112.50039 111.69961 113.2 112 114 112 C 114.4 112 114.79961 111.90078 115.09961 111.80078 C 116.19961 111.30078 117 110.2 117 109 L 117 14 C 117 6.8 111.2 1 104 1 L 24 1 z M 24 7 L 104 7 C 107.9 7 111 10.1 111 14 L 111 101.80078 L 96.099609 86.900391 C 95.599609 86.300391 94.8 86 94 86 L 24 86 C 20.1 86 17 82.9 17 79 L 17 14 C 17 10.1 20.1 7 24 7 z M 40 36 C 38.3 36 37 37.3 37 39 C 37 40.7 38.3 42 40 42 L 88 42 C 89.7 42 91 40.7 91 39 C 91 37.3 89.7 36 88 36 L 40 36 z M 40 51 C 38.3 51 37 52.3 37 54 C 37 55.7 38.3 57 40 57 L 73 57 C 74.7 57 76 55.7 76 54 C 76 52.3 74.7 51 73 51 L 40 51 z M 88 51 A 3 3 0 0 0 85 54 A 3 3 0 0 0 88 57 A 3 3 0 0 0 91 54 A 3 3 0 0 0 88 51 z M 24 121 A 3 3 0 0 0 21 124 A 3 3 0 0 0 24 127 A 3 3 0 0 0 27 124 A 3 3 0 0 0 24 121 z M 39 121 C 37.3 121 36 122.3 36 124 C 36 125.7 37.3 127 39 127 L 114 127 C 115.7 127 117 125.7 117 124 C 117 122.3 115.7 121 114 121 L 39 121 z"></path></svg>
)

export default Index;
