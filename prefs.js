
const Gtk = imports.gi.Gtk;


let params;
function init(params) {
	params = params;
}

let words = ["top-left", "top-right", "bottom-left", "bottom-right"];
function openApplicationDialog () {
	return function () {
		let dialog = new Gtk.Dialog({ title: "Add an application - CLOSE BY PRESSING Alt+F4", modal: true });
		dialog.add_button(Gtk.STOCK_CANCEL, Gtk.ResponseType.CANCEL);
		dialog.add_button("Add", Gtk.ResponseType.OK);
    	dialog.set_default_response(Gtk.ResponseType.OK);

		let grid = new Gtk.Grid({ column_spacing: 10,
                                  row_spacing: 15,
                                  margin: 10 });


		dialog._appChooser = new Gtk.AppChooserWidget({ show_all: true });
		grid.attach(dialog._appChooser, 0, 0, 2, 1);



  	    let container = new Gtk.Grid();
  	    container.margin = 10;
  	    container.orientation = Gtk.Orientation.VERTICAL;
		let radios = [];
		let group = null;
	    for (let i = 0; i < 4; i++) {
	    	if (i > 0) {
	    		group = radios[i-1];
	    	}
		    radios[i] = new Gtk.RadioButton({group: group, label: "Apply to " + words[i] + " corner", valign: Gtk.Align.START });
			container.add(radios[i]);
    	}
    	grid.attach(container, 0, 1, 1, 1);

		dialog.get_content_area().add(grid);
		dialog.show_all();


	}
}

function buildPrefsWidget() {
	let widget = new Gtk.Grid();
    widget.margin = 10;
	widget.orientation = Gtk.Orientation.VERTICAL;

    let presentLabel = "title";
    widget.add(new Gtk.Label({ label: presentLabel, sensitive: true, margin_bottom: 10, margin_top: 5 }));


    let checks = [];
    for (let i = 0; i < 4; i++) {
    	checks[i] = new Gtk.CheckButton({ label: "Enable " + words[i] + " corner"}); 
		widget.add(checks[i]);
    }

    checks[0].margin_top = 12;
	let toolbar = new Gtk.Toolbar();
	toolbar.get_style_context().add_class(Gtk.STYLE_CLASS_INLINE_TOOLBAR);
	widget.add(toolbar);
	button = new Gtk.ToolButton({
		stock_id: Gtk.STOCK_NEW,
		label: "Set application",
		is_important: true
	});
	toolbar.add(button);
	button.connect('clicked', openApplicationDialog());
    button.margin_top = 12;


    widget.show_all();

    return widget;
}
