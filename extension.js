
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Gtk = imports.gi.Gtk;



function init() {
}

let corner;
function enable() {

    let monitor = Main.layoutManager.primaryMonitor;
    let x = monitor.width / 2;
    let y = monitor.height / 2;

    corner = new St.Bin({
      reactive: true,
      track_hover: true,
      can_focus: true,
      style_class: "corner",
      x: x,
      y: y
    });

    // let dialog = new Gtk.Dialog({ title: "", modal: false});
    // dialog.show_all();


    corner.connect('enter-event', function () {
      Tweener.addTween(corner, {
        opacity: 0,
        time: 0.5,
        transition: 'easeOutQuad',
        onComplete: function () {
          Tweener.addTween(corner, {
            opacity: 255,
            time: 0.5,
            transition: 'easeOutQuad'
          });
        }
      });
    });

    Main.uiGroup.add_actor(corner);
}

function disable() {
    Main.uiGroup.add_actor(corner);
}
