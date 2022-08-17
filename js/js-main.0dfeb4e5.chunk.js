(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [0],
  {
    30: function (e, t, c) {},
    34: function (e, t, c) {},
    35: function (e, t, c) {},
    37: function (e, t, c) {},
    38: function (e, t, c) {},
    39: function (e, t, c) {},
    40: function (e, t, c) {},
    41: function (e, t, c) {},
    42: function (e, t, c) {},
    43: function (e, t, c) {},
    44: function (e, t, c) {},
    46: function (e, t, c) {
      "use strict";
      c.r(t);
      var s = c(9),
        n = c(3),
        a = c(1),
        i = c(0),
        l = Object(a.createContext)(),
        r = function (e) {
          var t = e.children,
            c = Object(a.useState)("light"),
            s = Object(n.a)(c, 2),
            r = s[0],
            o = s[1];
          Object(a.useEffect)(function () {
            var e = window.matchMedia("(prefers-color-scheme: dark)");
            o(e.matches ? "dark" : "light"),
              e.addEventListener("change", function (e) {
                o(e.matches ? "dark" : "light");
              });
          }, []);
          return Object(i.jsx)(l.Provider, {
            value: [
              {
                themeName: r,
                toggleTheme: function () {
                  var e = "dark" === r ? "light" : "dark";
                  localStorage.setItem("themeName", e), o(e);
                },
              },
            ],
            children: t,
          });
        },
        o = "https://pwul.dev",
        j = "pwul",
        d = {
          name: "pwul",
          role: "Web & Bot Developer",
          description:
            "The name is pwul but they call me a virgin",
          social: {
            github: "https://github.com/DaddyPwul",
            discord: "https://discord.gg/72g7ZpX3m5",
          },
        },
        b = [
          {
            name: "Skiddl",
            description:
              "Fetches the Skribbl.io wordlist and displays clickable hints based on the current word's pattern.",
            stack: ["JavaScript"],
            livePreview: "https://github.com/DaddyPwul/skiddl",
          },
        ],
        h = [
          "JavaScript",
          "HTML",
          "CSS",
          "C#",
        ],
        u = "https://discord.com/widget?id=996116137869836351&theme=dark",
        m = c(16),
        O = c.n(m),
        f = c(14),
        x = c.n(f),
        p = c(18),
        k = c.n(p),
        v = c(17),
        N = c.n(v),
        g =
          (c(30),
          function () {
            var e = Object(a.useContext)(l),
              t = Object(n.a)(e, 1)[0],
              c = t.themeName,
              s = t.toggleTheme,
              r = Object(a.useState)(!1),
              o = Object(n.a)(r, 2),
              j = o[0],
              d = o[1],
              m = function () {
                return d(!j);
              };
            return Object(i.jsxs)("nav", {
              className: "center nav",
              children: [
                Object(i.jsxs)("ul", {
                  style: { display: j ? "flex" : null },
                  className: "nav__list",
                  children: [
                    b.length
                      ? Object(i.jsx)("li", {
                          className: "nav__list-item",
                          children: Object(i.jsx)("a", {
                            href: "#projects",
                            onClick: m,
                            className: "link link--nav",
                            children: "Projects",
                          }),
                        })
                      : null,
                    h.length
                      ? Object(i.jsx)("li", {
                          className: "nav__list-item",
                          children: Object(i.jsx)("a", {
                            href: "#skills",
                            onClick: m,
                            className: "link link--nav",
                            children: "Skills",
                          }),
                        })
                      : null,
                    u
                      ? Object(i.jsx)("li", {
                          className: "nav__list-item",
                          children: Object(i.jsx)("a", {
                            href: "#discord",
                            onClick: m,
                            className: "link link--nav",
                            children: "Discord",
                          }),
                        })
                      : null,
                  ],
                }),
                Object(i.jsx)("button", {
                  type: "button",
                  onClick: s,
                  className: "btn btn--icon nav__theme",
                  "aria-label": "toggle theme",
                  children:
                    "dark" === c
                      ? Object(i.jsx)(x.a, {})
                      : Object(i.jsx)(O.a, {}),
                }),
                Object(i.jsx)("button", {
                  type: "button",
                  onClick: m,
                  className: "btn btn--icon nav__hamburger",
                  "aria-label": "toggle navigation",
                  children: j ? Object(i.jsx)(N.a, {}) : Object(i.jsx)(k.a, {}),
                }),
              ],
            });
          }),
        _ =
          (c(34),
          function () {
            var e = o,
              t = j;
            return Object(i.jsxs)("header", {
              className: "header center",
              children: [
                Object(i.jsx)("h3", {
                  children: e
                    ? Object(i.jsx)("a", {
                        href: e,
                        className: "link",
                        children: t,
                      })
                    : t,
                }),
                Object(i.jsx)(g, {}),
              ],
            });
          }),
        w = c(20),
        y = c(19),
        S =
          (c(35),
          function () {
            var e = d.name,
              t = d.role,
              c = d.description,
              s = d.resume,
              n = d.social;
            return Object(i.jsxs)("div", {
              className: "about center",
              children: [
                e &&
                  Object(i.jsxs)("h1", {
                    children: [
                      "Hi, I am ",
                      Object(i.jsxs)("span", {
                        className: "about__name",
                        children: [e, "."],
                      }),
                    ],
                  }),
                t &&
                  Object(i.jsxs)("h2", {
                    className: "about__role",
                    children: ["A ", t, "."],
                  }),
                Object(i.jsx)("p", {
                  className: "about__desc",
                  children: c && c,
                }),
                Object(i.jsxs)("div", {
                  className: "about__contact center",
                  children: [
                    s &&
                      Object(i.jsx)("a", {
                        href: s,
                        children: Object(i.jsx)("span", {
                          type: "button",
                          className: "btn btn--outline",
                          children: "Resume",
                        }),
                      }),
                    n &&
                      Object(i.jsxs)(i.Fragment, {
                        children: [
                          n.github &&
                            Object(i.jsx)("a", {
                              href: n.github,
                              "aria-label": "github",
                              className: "link link--icon",
                              children: Object(i.jsx)(y.FaGithub, {}),
                            }),
                          n.discord &&
                            Object(i.jsx)("a", {
                              href: n.discord,
                              "aria-label": "discord",
                              className: "link link--icon",
                              children: Object(i.jsx)(w.FaDiscord, {}),
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }),
        C = c(7),
        I = c.n(C),
        P = c(21),
        L = c.n(P),
        M = c(22),
        J = c.n(M),
        T =
          (c(37),
          function (e) {
            var t = e.project;
            return Object(i.jsxs)("div", {
              className: "project",
              children: [
                Object(i.jsx)("h3", { children: t.name }),
                Object(i.jsx)("p", {
                  className: "project__description",
                  children: t.description,
                }),
                t.stack &&
                  Object(i.jsx)("ul", {
                    className: "project__stack",
                    children: t.stack.map(function (e) {
                      return Object(i.jsx)(
                        "li",
                        { className: "project__stack-item", children: e },
                        I()()
                      );
                    }),
                  }),
                t.sourceCode &&
                  Object(i.jsx)("a", {
                    href: t.sourceCode,
                    "aria-label": "source code",
                    className: "link link--icon",
                    children: Object(i.jsx)(L.a, {}),
                  }),
                t.livePreview &&
                  Object(i.jsx)("a", {
                    href: t.livePreview,
                    "aria-label": "live preview",
                    className: "link link--icon",
                    children: Object(i.jsx)(J.a, {}),
                  }),
              ],
            });
          }),
        D =
          (c(38),
          function () {
            return b.length
              ? Object(i.jsxs)("section", {
                  id: "projects",
                  className: "section projects",
                  children: [
                    Object(i.jsx)("h2", {
                      className: "section__title",
                      children: "Projects",
                    }),
                    Object(i.jsx)("div", {
                      className: "projects__grid",
                      children: b.map(function (e) {
                        return Object(i.jsx)(T, { project: e }, I()());
                      }),
                    }),
                  ],
                })
              : null;
          }),
        E =
          (c(39),
          function () {
            return h.length
              ? Object(i.jsxs)("section", {
                  className: "section skills",
                  id: "skills",
                  children: [
                    Object(i.jsx)("h2", {
                      className: "section__title",
                      children: "Skills",
                    }),
                    Object(i.jsx)("ul", {
                      className: "skills__list",
                      children: h.map(function (e) {
                        return Object(i.jsx)(
                          "li",
                          {
                            className: "skills__list-item btn btn--plain",
                            children: e,
                          },
                          I()()
                        );
                      }),
                    }),
                  ],
                })
              : null;
          }),
        W = c(23),
        A = c.n(W),
        H =
          (c(40),
          function () {
            var e = Object(a.useState)(!1),
              t = Object(n.a)(e, 2),
              c = t[0],
              s = t[1];
            return (
              Object(a.useEffect)(function () {
                var e = function () {
                  return window.pageYOffset > 500 ? s(!0) : s(!1);
                };
                return (
                  window.addEventListener("scroll", e),
                  function () {
                    return window.removeEventListener("scroll", e);
                  }
                );
              }, []),
              c
                ? Object(i.jsx)("div", {
                    className: "scroll-top",
                    children: Object(i.jsx)("a", {
                      href: "#top",
                      children: Object(i.jsx)(A.a, { fontSize: "large" }),
                    }),
                  })
                : null
            );
          }),
        Q =
          (c(41),
          function () {
            return u
              ? Object(i.jsxs)("section", {
                  className: "section discord center",
                  id: "discord",
                  children: [
                    Object(i.jsx)("h2", {
                      className: "section__title",
                      children: "Discord",
                    }),
                    Object(i.jsx)("iframe", {
                      src: u,
                      width: "350",
                      height: "500",
                      allowtransparency: "true",
                      frameBorder: "0",
                      sandbox:
                        "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                      title: "discord",
                    }),
                  ],
                })
              : null;
          }),
        F =
          (c(42),
          function () {
            return Object(i.jsx)("footer", {
              className: "footer",
              children: Object(i.jsx)("a", {
                href: "https://discord.com/users/851448600121966633",
                className: "link footer__link",
                children: "Made with \u2764\ufe0f by Noir",
              }),
            });
          }),
        G =
          (c(43),
          function () {
            var e = Object(a.useContext)(l),
              t = Object(n.a)(e, 1)[0].themeName;
            return Object(i.jsxs)("div", {
              id: "top",
              className: "".concat(t, " app"),
              children: [
                Object(i.jsx)(_, {}),
                Object(i.jsxs)("main", {
                  children: [
                    Object(i.jsx)(S, {}),
                    Object(i.jsx)(D, {}),
                    Object(i.jsx)(E, {}),
                    Object(i.jsx)(Q, {}),
                  ],
                }),
                Object(i.jsx)(H, {}),
                Object(i.jsx)(F, {}),
              ],
            });
          });
      c(44);
      Object(s.render)(
        Object(i.jsx)(r, { children: Object(i.jsx)(G, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[46, 1, 2]],
]);
//# sourceMappingURL=main.0dfeb4e5.chunk.js.map
