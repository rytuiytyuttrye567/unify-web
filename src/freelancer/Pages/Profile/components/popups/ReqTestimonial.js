import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { onEditTestimonialInfo } from "../../../../../redux/actions/profileAction";
import Form from "react-bootstrap/Form";

const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

const ReqTestimonial = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const testimonialSubmit = (e) => {
    dispatch(onEditTestimonialInfo(values));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Request A Client Testimonial</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-3 pt-1 mb-3">
              <div className="popuphead_smparcr">
                Add your client’s contact details. Don’t worry—we’ll only
                display their first name and last initial.
              </div>
            </div>

            <div className="mb-3 ">
              <Row>
                <Col md={6}>
                  <Form.Group className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="first_name"
                      className="font-size-13px"
                      value={values?.first_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter First Name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Last name{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="last_name"
                      className="font-size-13px"
                      value={values?.last_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Last name "
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Business email address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      className="font-size-13px"
                      value={values?.email}
                      onChange={(e) => onInputChange(e)}
                      placeholder=""
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Client's LinkedIn Profile
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="linkedin_url"
                      className="font-size-13px"
                      value={values?.linkedin_url}
                      onChange={(e) => onInputChange(e)}
                      placeholder="http://"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Client's title (Optional)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      className="font-size-13px"
                      value={values?.title}
                      onChange={(e) => onInputChange(e)}
                      placeholder=" Degree (Optional)"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Project Type (Optional)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="type"
                      className="font-size-13px"
                      value={values?.type}
                      onChange={(e) => onInputChange(e)}
                      placeholder=" Degree (Optional)"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      className="font-size-13px"
                      value={values?.description}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                className="font-weight-600"
                onClick={() => {
                  testimonialSubmit();
                  props.Popup();
                }}
              >
                REQUEST TESTIMONIAL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReqTestimonial;
