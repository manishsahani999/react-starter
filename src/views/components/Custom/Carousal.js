/*eslint-disable*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// react plugin used to create an image gallery
import { PhotoSwipeGallery } from "react-photoswipe";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Modal,
  Input,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// PhotoSwipe items

let options = {
  //http://photoswipe.com/documentation/options.html
};

let getThumbnailContent = item => {
  return (
    <div
      className="gallery-item"
      itemProp="associatedMedia"
      itemScope=""
      itemType="http://schema.org/ImageObject"
    >
      <a data-size="750x1002" href={item.src} itemProp="contentUrl">
        <img
          alt="..."
          className="vertical-image img-rounded img-responsive"
          itemProp="thumbnail"
          src={item.src}
        />
      </a>
      <figcaption className="gallery-caption" itemProp="caption description">
        {item.title}
      </figcaption>
    </div>
  );
};

// carousel items
const carouselItems = [
  {
    src: 'https://static1.bigstockphoto.com/2/8/1/large1500/182407753.jpg',
    altText: "Somewhere",
    caption: "Somewhere"
  },
];

function CustomCarousal() {
  // modals states
  const [classic, setClassic] = React.useState(false);
  const [notice, setNotice] = React.useState(false);
  const [smallAlert, setSmallAlert] = React.useState(false);
  const [smallNotice, setSmallNotice] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  // carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-blue javascript-components">
        <Container>
          <Row>
            <Col className="mr-auto pl-0" md="10">
              <Card className="card-raised page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={carouselItems}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {carouselItems.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CustomCarousal;
