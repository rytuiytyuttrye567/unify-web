import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

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


const EditTitle = (props) => {
    return (
      <>
        <div className="bg_wrapper_popup_new">
          <div className="popup_box_bpn profile_nceqoi_popup pb-4">
            <div className="popup_header pb-0">
              <div className="p_header_hding">Edit your title</div>
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
              <div className="mt-4 pt-1 mb-4">
                <div className="pouphed_skll">Your title</div>
                <div className="popuphead_smparcr">
                  Enter a single sentence description of your professional
                  skills/experience (e.g. Expert Web Designer with Ajax
                  experience)
                </div>
              </div>
  
              <div className="popup_form_element mb-5">
                <Form.Control
                  type="text"
                  className="font-size-13px"
                  placeholder="Senior UI/UX, Website Designer And Graphic Designer"
                />
              </div>
  
              <div className="popup_btns_new flex-wrap cwiewyehkk">
                <Button className="trans_btn">Cancel</Button>
                <Button
                  onClick={() => {
                    props.Popup();
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default EditTitle