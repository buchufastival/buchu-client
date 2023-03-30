import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="footer-tit">
        <div className="footer-left">
          <p className="footer-left-name">BUCHU</p>
          <div className="footer-left-call">
            <p>Tell</p>
            <p>051-1234-5678</p>
          </div>
          <div className="footer-left-mail">
            <p>Email</p>
            <p>Buchu_Busan@gmail.com</p>
          </div>
          <p className="footer-left-admin">admin</p>
        </div>
        <div className="footer-right">
          <img src="/images/footer.svg" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
