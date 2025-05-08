import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const current = new Date().getFullYear();
  return (
    <footer>
      <div className="w-full border-top flex-center p-5 align-content-center">
        Copyright &copy; {current} {APP_NAME} All right Reserved
      </div>
    </footer>
  );
};

export default Footer;
