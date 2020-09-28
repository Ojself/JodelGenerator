import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const tos = (
    <>
    <p > By using JodelGenerator, you agree to use our services lawfully and ethically, and in accordance to these rules:</p>
<ul>
<li>You do not use generated images in ill intent; such as to harass, attack, slander, threaten, disparage, or otherwise intimidate other people;</li>
<li>You do not use generated images as any kind of evidence (except for misuse of JodelGenerator);</li>
<li>You do not use generated images to spread false information;</li>
<li>You do not present generated images as fact.</li>
</ul>

<p>By using JodelGenerator, you also agree to be held legally responsible for anything that you generate. JodelGenerator is not liable for the actions of its users, or the content that its users create.</p>

<p> Also note that JodelGenerator is not affiliated in any way to Jodel, Inc.</p>

<p>(Last updated September 30, 2020)</p>
</>
)

const privacy = (
    <>
    <p> No data is stored by using JodelGenerator. No captcha utilities or Google analytics (or tools of same nature) are being used </p>
    <p>(Last updated September 30, 2020)</p>
    </>
)


export default function Footer() {
    const classes = useStyles();
  const [tosOpen, setTosOpen] = React.useState(false);
  const [privacyOpen, setPrivacyOpen] = React.useState(false);

  const handleTosOpen = () => {
    setTosOpen(true);
  };

  const handleTosClose = () => {
    setTosOpen(false);
  };

  const handlePrivacyOpen = () => {
    setPrivacyOpen(true);
  };

  const handlePrivacyClose = () => {
    setPrivacyOpen(false);
  };
  return (
    <div className="footer">
      <p>By using this service you agree to the <span style={{color: '#0000EE', cursor: 'pointer'}} onClick={handleTosOpen}> Terms of Service </span> and <span style={{color: '#0000EE', cursor: 'pointer'}} onClick={handlePrivacyOpen}>Privacy Policy.</span> </p>
      <Modal
        aria-labelledby="modalTos"
        aria-describedby="tos"
        className={classes.modal}
        open={tosOpen}
        onClose={handleTosClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={tosOpen}>
          <div className={classes.paper}>
            <h2 id="modalTos">Terms of Service</h2>
            {tos}
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="modalPrivacy"
        aria-describedby="privacy"
        className={classes.modal}
        open={privacyOpen}
        onClose={handlePrivacyClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={privacyOpen}>
          <div className={classes.paper}>
            <h2 id="modalPrivacy">Privacy Policy</h2>
            {privacy}
          </div>
        </Fade>
      </Modal>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/Ojself">
      <GitHubIcon color="action"/>
      </a>
    </div>
  )
}

