function W(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default")
    ? b.default
    : b;
}
var N = { exports: {} };
(function (b) {
  (function () {
    var S = {
        de_DE: {
          identifier: "de-DE",
          days: [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
          ],
          shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          months: [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mär",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dez",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d.%m.%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        en_CA: {
          identifier: "en-CA",
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          ordinalSuffixes: [
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D",
          },
        },
        en_US: {
          identifier: "en-US",
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          ordinalSuffixes: [
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%m/%d/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D",
          },
        },
        es_MX: {
          identifier: "es-MX",
          days: [
            "domingo",
            "lunes",
            "martes",
            "miércoles",
            "jueves",
            "viernes",
            "sábado",
          ],
          shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
          months: [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            " diciembre",
          ],
          shortMonths: [
            "ene",
            "feb",
            "mar",
            "abr",
            "may",
            "jun",
            "jul",
            "ago",
            "sep",
            "oct",
            "nov",
            "dic",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        fr_FR: {
          identifier: "fr-FR",
          days: [
            "dimanche",
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
          ],
          shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
          months: [
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre",
          ],
          shortMonths: [
            "janv.",
            "févr.",
            "mars",
            "avril",
            "mai",
            "juin",
            "juil.",
            "août",
            "sept.",
            "oct.",
            "nov.",
            "déc.",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        it_IT: {
          identifier: "it-IT",
          days: [
            "domenica",
            "lunedì",
            "martedì",
            "mercoledì",
            "giovedì",
            "venerdì",
            "sabato",
          ],
          shortDays: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
          months: [
            "gennaio",
            "febbraio",
            "marzo",
            "aprile",
            "maggio",
            "giugno",
            "luglio",
            "agosto",
            "settembre",
            "ottobre",
            "novembre",
            "dicembre",
          ],
          shortMonths: [
            "gen",
            "feb",
            "mar",
            "apr",
            "mag",
            "giu",
            "lug",
            "ago",
            "set",
            "ott",
            "nov",
            "dic",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        nl_NL: {
          identifier: "nl-NL",
          days: [
            "zondag",
            "maandag",
            "dinsdag",
            "woensdag",
            "donderdag",
            "vrijdag",
            "zaterdag",
          ],
          shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          months: [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december",
          ],
          shortMonths: [
            "jan",
            "feb",
            "mrt",
            "apr",
            "mei",
            "jun",
            "jul",
            "aug",
            "sep",
            "okt",
            "nov",
            "dec",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        pt_BR: {
          identifier: "pt-BR",
          days: [
            "domingo",
            "segunda",
            "terça",
            "quarta",
            "quinta",
            "sexta",
            "sábado",
          ],
          shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          months: [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro",
          ],
          shortMonths: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        ru_RU: {
          identifier: "ru-RU",
          days: [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
          ],
          shortDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          months: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ],
          shortMonths: [
            "янв",
            "фев",
            "мар",
            "апр",
            "май",
            "июн",
            "июл",
            "авг",
            "сен",
            "окт",
            "ноя",
            "дек",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X",
            D: "%d.%m.%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        tr_TR: {
          identifier: "tr-TR",
          days: [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi",
          ],
          shortDays: ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cts"],
          months: [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık",
          ],
          shortMonths: [
            "Oca",
            "Şub",
            "Mar",
            "Nis",
            "May",
            "Haz",
            "Tem",
            "Ağu",
            "Eyl",
            "Eki",
            "Kas",
            "Ara",
          ],
          AM: "ÖÖ",
          PM: "ÖS",
          am: "ÖÖ",
          pm: "ÖS",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        zh_CN: {
          identifier: "zh-CN",
          days: [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
          ],
          shortDays: ["日", "一", "二", "三", "四", "五", "六"],
          months: [
            "一月份",
            "二月份",
            "三月份",
            "四月份",
            "五月份",
            "六月份",
            "七月份",
            "八月份",
            "九月份",
            "十月份",
            "十一月份",
            "十二月份",
          ],
          shortMonths: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
          AM: "上午",
          PM: "下午",
          am: "上午",
          pm: "下午",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D",
          },
        },
      },
      F = S.en_US,
      P = new k(F, 0, !1);
    (b.exports = P),
      typeof Date.now != "function" &&
        (Date.now = function () {
          return +new Date();
        });
    function k(a, s, m) {
      var v = a || F,
        f = s || 0,
        c = m || !1,
        d = 0,
        Y;
      function _(i, e) {
        var t;
        if (e) {
          if (((t = e.getTime()), c)) {
            var r = T(e);
            if (((e = new Date(t + r + f)), T(e) !== r)) {
              var n = T(e);
              e = new Date(t + n + f);
            }
          }
        } else {
          var o = Date.now();
          o > d
            ? ((d = o),
              (Y = new Date(d)),
              (t = d),
              c && (Y = new Date(d + T(Y) + f)))
            : (t = d),
            (e = Y);
        }
        return M(i, e, v, t);
      }
      function M(i, e, t, o) {
        for (
          var r = "", n = null, l = !1, I = i.length, A = !1, y = 0;
          y < I;
          y++
        ) {
          var D = i.charCodeAt(y);
          if (l === !0) {
            if (D === 45) {
              n = "";
              continue;
            } else if (D === 95) {
              n = " ";
              continue;
            } else if (D === 48) {
              n = "0";
              continue;
            } else if (D === 58) {
              A &&
                X(
                  "[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"
                ),
                (A = !0);
              continue;
            }
            switch (D) {
              case 37:
                r += "%";
                break;
              case 65:
                r += t.days[e.getDay()];
                break;
              case 66:
                r += t.months[e.getMonth()];
                break;
              case 67:
                r += u(Math.floor(e.getFullYear() / 100), n);
                break;
              case 68:
                r += M(t.formats.D, e, t, o);
                break;
              case 70:
                r += M(t.formats.F, e, t, o);
                break;
              case 72:
                r += u(e.getHours(), n);
                break;
              case 73:
                r += u(H(e.getHours()), n);
                break;
              case 76:
                r += z(Math.floor(o % 1e3));
                break;
              case 77:
                r += u(e.getMinutes(), n);
                break;
              case 80:
                r += e.getHours() < 12 ? t.am : t.pm;
                break;
              case 82:
                r += M(t.formats.R, e, t, o);
                break;
              case 83:
                r += u(e.getSeconds(), n);
                break;
              case 84:
                r += M(t.formats.T, e, t, o);
                break;
              case 85:
                r += u(w(e, "sunday"), n);
                break;
              case 87:
                r += u(w(e, "monday"), n);
                break;
              case 88:
                r += M(t.formats.X, e, t, o);
                break;
              case 89:
                r += e.getFullYear();
                break;
              case 90:
                if (c && f === 0) r += "GMT";
                else {
                  var O = R(e);
                  r += O || "";
                }
                break;
              case 97:
                r += t.shortDays[e.getDay()];
                break;
              case 98:
                r += t.shortMonths[e.getMonth()];
                break;
              case 99:
                r += M(t.formats.c, e, t, o);
                break;
              case 100:
                r += u(e.getDate(), n);
                break;
              case 101:
                r += u(e.getDate(), n ?? " ");
                break;
              case 104:
                r += t.shortMonths[e.getMonth()];
                break;
              case 106:
                var U = new Date(e.getFullYear(), 0, 1),
                  h = Math.ceil(
                    (e.getTime() - U.getTime()) / (1e3 * 60 * 60 * 24)
                  );
                r += z(h);
                break;
              case 107:
                r += u(e.getHours(), n ?? " ");
                break;
              case 108:
                r += u(H(e.getHours()), n ?? " ");
                break;
              case 109:
                r += u(e.getMonth() + 1, n);
                break;
              case 110:
                r += `
`;
                break;
              case 111:
                var h = e.getDate();
                t.ordinalSuffixes
                  ? (r += String(h) + (t.ordinalSuffixes[h - 1] || j(h)))
                  : (r += String(h) + j(h));
                break;
              case 112:
                r += e.getHours() < 12 ? t.AM : t.PM;
                break;
              case 114:
                r += M(t.formats.r, e, t, o);
                break;
              case 115:
                r += Math.floor(o / 1e3);
                break;
              case 116:
                r += "	";
                break;
              case 117:
                var h = e.getDay();
                r += h === 0 ? 7 : h;
                break;
              case 118:
                r += M(t.formats.v, e, t, o);
                break;
              case 119:
                r += e.getDay();
                break;
              case 120:
                r += M(t.formats.x, e, t, o);
                break;
              case 121:
                r += ("" + e.getFullYear()).slice(2);
                break;
              case 122:
                if (c && f === 0) r += A ? "+00:00" : "+0000";
                else {
                  var p;
                  f !== 0 ? (p = f / (60 * 1e3)) : (p = -e.getTimezoneOffset());
                  var Z = p < 0 ? "-" : "+",
                    E = A ? ":" : "",
                    B = Math.floor(Math.abs(p / 60)),
                    L = Math.abs(p % 60);
                  r += Z + u(B) + E + u(L);
                }
                break;
              default:
                l && (r += "%"), (r += i[y]);
                break;
            }
            (n = null), (l = !1);
            continue;
          }
          if (D === 37) {
            l = !0;
            continue;
          }
          r += i[y];
        }
        return r;
      }
      var g = _;
      return (
        (g.localize = function (i) {
          return new k(i || v, f, c);
        }),
        (g.localizeByIdentifier = function (i) {
          var e = S[i];
          return e
            ? g.localize(e)
            : (X('[WARNING] No locale found with identifier "' + i + '".'), g);
        }),
        (g.timezone = function (i) {
          var e = f,
            t = c,
            o = typeof i;
          if (o === "number" || o === "string")
            if (((t = !0), o === "string")) {
              var r = i[0] === "-" ? -1 : 1,
                n = parseInt(i.slice(1, 3), 10),
                l = parseInt(i.slice(3, 5), 10);
              e = r * (60 * n + l) * 60 * 1e3;
            } else o === "number" && (e = i * 60 * 1e3);
          return new k(v, e, t);
        }),
        (g.utc = function () {
          return new k(v, f, !0);
        }),
        g
      );
    }
    function u(a, s) {
      return s === "" || a > 9 ? a : (s == null && (s = "0"), s + a);
    }
    function z(a) {
      return a > 99 ? a : a > 9 ? "0" + a : "00" + a;
    }
    function H(a) {
      return a === 0 ? 12 : a > 12 ? a - 12 : a;
    }
    function w(a, s) {
      s = s || "sunday";
      var m = a.getDay();
      s === "monday" && (m === 0 ? (m = 6) : m--);
      var v = Date.UTC(a.getFullYear(), 0, 1),
        f = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()),
        c = Math.floor((f - v) / 864e5),
        d = (c + 7 - m) / 7;
      return Math.floor(d);
    }
    function j(a) {
      var s = a % 10,
        m = a % 100;
      if ((m >= 11 && m <= 13) || s === 0 || s >= 4) return "th";
      switch (s) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
      }
    }
    function T(a) {
      return (a.getTimezoneOffset() || 0) * 6e4;
    }
    function R(a, s) {
      return x(a, s) || J(a);
    }
    function x(a, s) {
      if (s == null) return null;
      var m = a
        .toLocaleString(s, { timeZoneName: "short" })
        .match(/\s([\w]+)$/);
      return m && m[1];
    }
    function J(a) {
      var s = a.toString().match(/\(([\w\s]+)\)/);
      return s && s[1];
    }
    function X(a) {
      typeof console < "u" &&
        typeof console.warn == "function" &&
        console.warn(a);
    }
  })();
})(N);
var G = N.exports;
const q = W(G),
  K = q.utc();
function Q(b, S) {
  return K(b, new Date(S));
}
export { Q as f };
