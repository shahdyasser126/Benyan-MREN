import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({ drafts }) {

  const links = [
    {   icon: "fa-chart-bar",title: "status",path: "/",  },
    { icon: "fa-users",title: "Users Management",path: "/users",},
    {icon: "fa-building",title: "Projects Mangement",path: "/projects",},
    {icon: "fa-building",title: "Developer Mangement",path: "/developers",},
    {icon: "fa-globe", title: "CMS",},
    {icon: "fa-message",title: "Live Chat",},
  ];

  return (

    <aside className={`${styles.sidebar} min-vh-100 py-4`}>
      <div className="px-4 mb-3 fs-4 opacity-25 fw-semibold">
        Dashboard
      </div>
      {/* nav */}
      <nav>
        {links.map((item, index) => (
          <NavLink to={item.path} className={`${styles.navItem} d-flex align-items-center gap-3 px-4 py-3`}key={index}>
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span>{item.title}</span>
            {/* USERS */}
            {item.path === "/users" &&drafts.users && (
                <span className="badge bg-danger ms-auto">  Draft </span>
            )
            }

            {/* PROJECTS */}
            {
              item.path === "/projects" && drafts.projects && (
              <span className="badge bg-warning text-dark ms-auto">
                  Draft
                </span>
              )
            }

            {/* DEVELOPERS */}
            {
              item.path === "/developers" &&drafts.developers && (
                <span className="badge bg-primary ms-auto">
                 Draft
                </span>

              )
            }

          </NavLink>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;
 