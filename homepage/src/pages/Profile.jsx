import React from 'react'
import NavbarSec from '../components/NavbarSec'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon,  MDBCardHeader, MDBCardTitle } from 'mdb-react-ui-kit';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { useState } from 'react';

function Profile() {

  // const [basicActive, setBasicActive] = useState('tab1');

  // const handleBasicClick = () => {
  //   if (value === basicActive) {
  //     return;
  //   }

  //   setBasicActive(value);
  // };
  return (
    <div>
        <NavbarSec />
        <div className="gradient-custom-2" style={{ backgroundColor: '#fff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
         
          {/* <MDBCard className='text-center'>
      <MDBCardHeader>
        <MDBTabs className='card-header-tabs'>
          <MDBTabsItem>
            <MDBTabsLink active>
              Active
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink>
              Link
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink>
              Disabled
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>
          With supporting text below as a natural lead-in to additional content.
        </MDBCardText>
        <MDBBtn>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard> */}

            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#56858b', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Dilara Kaygısız</MDBTypography>
                  <MDBCardText>Antalya</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">15</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Connections</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">4</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Communities</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Lives in Antalya</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Amateur Volleyball Player</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Joined Events</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <MDBTypography tag='h3'>Acro Yoga Class</MDBTypography>
                <MDBCardText className="small">
                  <MDBIcon fas icon="star text-warning" size="lg" />
                  <span className="mx-2">|</span> Public <span className="mx-2">|</span> Updated by <strong>YogaKio</strong> on 11 April , 2021
                </MDBCardText>
                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="cog me-2" /> <span className="text-muted small">settings</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="link ms-4 me-2" /> <span className="text-muted small">program link</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="ellipsis-h ms-4 me-2" /> <span className="text-muted small">program link</span> <span className="ms-3 me-4">|</span>
                  </MDBCardText>
                  <a href="#!">
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" className="rounded-circle me-3" fluid />
                  </a>
                  <MDBBtn outline color="dark" floating size="sm">
                    <MDBIcon fas icon="plus" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <MDBTypography tag='h3'>Volleyball Tournament</MDBTypography>
                <MDBCardText className="small">
                  <MDBIcon fas icon="star text-warning" size="lg" />
                  <span className="mx-2">|</span> Public <span className="mx-2">|</span> Updated by <strong>VolleyClub</strong> on 11 April , 2021
                </MDBCardText>
                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="cog me-2" /> <span className="text-muted small">settings</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="link ms-4 me-2" /> <span className="text-muted small">program link</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="ellipsis-h ms-4 me-2" /> <span className="text-muted small">program link</span> <span className="ms-3 me-4">|</span>
                  </MDBCardText>
                  <a href="#!">
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" className="rounded-circle me-3" fluid />
                  </a>
                  <MDBBtn outline color="dark" floating size="sm">
                    <MDBIcon fas icon="plus" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </div>
  )
}

export default Profile