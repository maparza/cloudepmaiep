var OsirisApp = window.OsirisApp || {};
OsirisApp.MasterPlan = OsirisApp.MasterPlan || {};

$(document).ready(function () {
    "use strict";
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', OsirisApp.MasterPlan.Init);    
});

OsirisApp.MasterPlan.Init = function (){
	"use strict";
    kendo.culture("es-CL");  
    OsirisApp.MasterPlan.NewWork = new OsirisApp.MasterPlan.Work();
	OsirisApp.MasterPlan.NewWork.SetControls();	
};	

var context;
	var user;	
	var projList;
	var currList;	
	var ipProyecto;
	var nombreProyecto;
	var currentItem;	
	var paramList;	

OsirisApp.MasterPlan.Work = function(){

	function VicerrectoriaDropDownEditor(container, options) {
		$('<input required name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: true,                            
				dataSource: maestroVicerrectoria,	
				dataTextField: "Title",
				dataValueField: "Codigo"		
			});
	}
	function AreaDropDownEditor(container, options) {
		$('<input required name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: true,                            
				dataSource: maestroArea,	
				dataTextField: "Title",
				dataValueField: "Codigo"		
			});
	}
	function GrupoDropDownEditor(container, options) {
		$('<input required name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: true,                            
				dataSource: maestroGrupo,	
				dataTextField: "Title",
				dataValueField: "Codigo"		
			});
	}
	function PeriodoDropDownEditor(container, options) {
		$('<input required name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: true,                            
				dataSource: maestroPeriodo,	
				dataTextField: "Title",
				dataValueField: "Codigo"		
			});
	}
	function ImpactoDropDownEditor(container, options) {
		$('<input required name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: true,                            
				dataSource: maestroImpacto,	
				dataTextField: "Title",
				dataValueField: "Codigo"		
			});
	}
	function PrioridadDropDownEditor(container, options) {
		$('<input required name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: true,                            
				dataSource: maestroPrioridad,	
				dataTextField: "Title",
				dataValueField: "Codigo"		
			});
	}

	function SiNoObligatorioDropDownEditor(container, options) {
		$('<input required name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: false,                            
				dataSource: [
					"SÍ","NO"
				], 
				index: 1
			});
	}
	function SiNoDropDownEditor(container, options) {
		$('<input name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				autoBind: false,                            
				dataSource: [
					"SÍ","NO"
				]
			});
	}
	function customTextReadonlyEditor(container, options) {
		$('<input name="' + options.field + '" readonly/>')
				.appendTo(container);
	}

	function customKendoNumericEditor(container, options) {
		$('<input name="' + options.field + '"/>')
			.appendTo(container)
			.NumericTextBox({
				autoBind: false,                            
				decimals: 0, format: "n0", 
			});
	}

	function customDatePickerEditor(container, options){
		//var dateString = kendo.toString(options.model.fecha, "dd/MM/yyyy" );
		//var $input = $("<input />").attr("name", options.field).appendTo(container);
		//$input.datepicker({dateFormat:"dd/mm/yyyy"});		
		//var $input = $("<input value="+ dateString +" />").appendTo(container);
		//$input.datepicker();
		$('<input data-text-field="' + options.field + '" data-value-field="' + options.field + '" data-bind="value:' + options.field + '" data-format="' + options.format + '"/>')
            .appendTo(container)
            .kendoDatePicker({});
	}	

	function customPersonaEditor(container, options) {
		$('<div id="' + options.field + '"/>')
				.appendTo(container);
				console.log(options.field);
		initializePeoplePicker(options.field, null);
	}

	function SumGeneral() {
		var data = evaluacionesDataSource.data();
		var item, sum = 0;
		for (var idx = 0; idx < data.length; idx++) {
			item = data[idx];				
			sum += item.costorev;
		}
		return kendo.toString(sum, "n0");
	}

	var dialog = $("#dialog");

	var evaluaciones = [];
	var evaluacionesDataNextID = evaluaciones == null ? 1 : evaluaciones.length + 1;
	function getEvaluacionesIndexById(id) {
		var idx,
			l = evaluaciones.length;

		for (var j=0; j < l; j++) {
			if (evaluaciones[j].num == id) {
				return j;
			}
		}
		return null;
	}
	var evaluacionesDataSource = new kendo.data.DataSource({
		data: evaluaciones,
		transport: {
					read: function (e) {   
						e.success(evaluaciones);                        
					},
					create: function (e) {                        
						e.data.num = evaluacionesDataNextID++;
						evaluaciones.push(e.data);                        
						e.success(e.data);
					},
					update: function (e) {
						evaluaciones[getEvaluacionesIndexById(e.data.num)] = e.data;   
						var jsonData = JSON.stringify(evaluaciones);
						e.success();                        
					},
					destroy: function (e) {
						evaluaciones.splice(getEvaluacionesIndexById(e.data.num), 1);                        
						e.success();
					}
				},
				error: function (e) {
					// handle data operation error
					kendo.alert("Status: " + e.status + "; Error message: " + e.errorThrown);
				},
				batch: false,
				schema: {
					model: {
						id: "num",
						fields: {
							num: { editable: false, nullable: false, hidden: true },
							sel: { validation: { required: true }, type: "boolean" },
                            ip: { editable: false, validation: { required: true } },
							portafolio: { editable: false, validation: { required: true } },
							nombre: { editable: false, validation: { required: true } },							
							vicerrect: { editable: false, validation: { required: true } },
							unidad: { editable: false },
							prioridad: { validation: { required: true } },
							area: { validation: { required: true } },
							grupo: { editable: false, validation: { required: true } },
							equipo: { editable: false, validation: { required: true } },
							costoplan: { validation: { required: true, min: 0 }, type: "number" },
							costorev: { validation: { required: true, min: 0 }, type: "number" },							
							plazosol: { validation: { required: true, min: 0 }, type: "number" },
							plazorev: { validation: { required: true, min: 0 }, type: "number" },
							periodo: { validation: { required: true } },
							anio: { validation: { required: true, min: 1900 }, type: "number" },
							obs: { validation: { required: true } },
							cip: { validation: { required: true }, type: "number" },
							__kendo_devtools_id: { hidden: true }
						}
					}
				}
	});

	var impactos = [];
	var impactosDataNextID = impactos == null ? 1 : impactos.length + 1;
	function getImpactosIndexById(id) {
		var idx,
			l = impactos.length;

		for (var j=0; j < l; j++) {
			if (impactos[j].num == id) {
				return j;
			}
		}
		return null;
	}
	var impactosDataSource = new kendo.data.DataSource({
		data: impactos,
		transport: {
					read: function (e) {   
						e.success(impactos);                        
					},
					create: function (e) {                        
						e.data.num = impactosDataNextID++;
						impactos.push(e.data);                        
						e.success(e.data);
					},
					update: function (e) {
						impactos[getImpactosIndexById(e.data.num)] = e.data;   
						var jsonData = JSON.stringify(impactos);
						e.success();                        
					},
					destroy: function (e) {
						impactos.splice(getImpactosIndexById(e.data.num), 1);                        
						e.success();

					}
				},
				error: function (e) {
					// handle data operation error
					kendo.alert("Status: " + e.status + "; Error message: " + e.errorThrown);
				},
				batch: false,
				schema: {
					model: {
						id: "num",
						fields: {
							num: { editable: false, nullable: false, hidden: true },
                            nombre: { editable: false, validation: { required: true } },
							unidadesprincipales1: { editable: false, validation: { required: true } },
							unidadesprincipales2: { editable: false, validation: { required: true } },
							oe1: { validation: { required: true }, type: "boolean" },
							oe2: { validation: { required: true }, type: "boolean" },
							oe3: { validation: { required: true }, type: "boolean" },
							oe4: { validation: { required: true }, type: "boolean" },
							oe5: { validation: { required: true }, type: "boolean" },
							unidad1: { validation: { required: true } },
							unidad2: { validation: { required: true } },
							unidad3: { validation: { required: true } },
							unidad4: { validation: { required: true } },
							unidad5: { validation: { required: true } },
							unidad6: { validation: { required: true } },
							unidad7: { validation: { required: true } },
							unidad8: { validation: { required: true } },
							unidad9: { validation: { required: true } },							
							__kendo_devtools_id: { hidden: true }
						}
					}
				}
	});

	var autorizaciones = [];
	var autorizacionesDataNextID = autorizaciones == null ? 1 : autorizaciones.length + 1;
	function getAutorizacionesIndexById(id) {
		var idx,
			l = autorizaciones.length;
		for (var j=0; j < l; j++) {
			if (autorizaciones[j].num == id) {
				return j;
			}
		}
		return null;
	}
	var autorizacionesDataSource = new kendo.data.DataSource({
		data: autorizaciones,
		transport: {
					read: function (e) {   
						e.success(autorizaciones);                        
					},
					create: function (e) {                        
						e.data.num = impactosDataNextID++;
						autorizaciones.push(e.data);                        
						e.success(e.data);
					},
					update: function (e) {
						autorizaciones[getAutorizacionesIndexById(e.data.num)] = e.data;   
						var jsonData = JSON.stringify(autorizaciones);
						e.success();                        
					},
					destroy: function (e) {
						autorizaciones.splice(getAutorizacionesIndexById(e.data.num), 1);                        
						e.success();

					}
				},
				error: function (e) {
					// handle data operation error
					kendo.alert("Status: " + e.status + "; Error message: " + e.errorThrown);
				},
				batch: false,
				schema: {
					model: {
						id: "num",
						fields: {
							num: { editable: false, nullable: false, hidden: true },
                            persona: { validation: { required: true } },
							cargo: { validation: { required: true } },
							fecha: { validation: { required: true }, type: "date" },
							observaciones: { validation: { required: true } },							
							__kendo_devtools_id: { hidden: true }
						}
					}
				}
	});

	function setControls(){
		$("#menu").kendoMenu();

		var pageTitle = $(".ms-core-pageTitle");
		if (pageTitle != null) pageTitle.hide();
		
		//$("#tabAnalisis").hide();
		$("#tabImpacto").hide();
		$("#tabAutorizacion").hide();
		var menu = $("#menu").data("kendoMenu");		
		menu.bind("select", function(e) {
			switch(e.item.childNodes[0].innerHTML){
				case "Análisis":
					$("#tabAnalisis").show();
					$("#tabImpacto").hide();
					$("#tabAutorizacion").hide();
				break;
				case "Impacto":
					$("#tabAnalisis").hide();
					$("#tabImpacto").show();
					$("#tabAutorizacion").hide();
				break;
				case "Autorización":
					$("#tabAnalisis").hide();
					$("#tabImpacto").hide();
					$("#tabAutorizacion").show();
				break;				
			}
		});

		initializePeoplePicker('peoplePickerDiv', null); 

		$("#fechaVersion").kendoDatePicker({value: new Date()});
		var fechaVersion = $("#fechaVersion").data("kendoDatePicker");		
		fechaVersion.readonly();
		$("#fechaResolucion").kendoDatePicker({value: new Date()});	
		$("#totalautorizado").kendoNumericTextBox({format: "c0", min: 0, restrictDecimals: true, decimals: 0});

		var versionTextbox = $("#version").kendoNumericTextBox({format: "n0", min: 0, restrictDecimals: true, decimals: 1}).data("kendoNumericTextBox");		
		versionTextbox.value(1);
		versionTextbox.readonly();
		$("#montoInversionSolicitada").kendoNumericTextBox({format: "c0", min: 0, restrictDecimals: true, decimals: 0});	
		$("#montoInversionAutorizada").kendoNumericTextBox({format: "c0", min: 0, restrictDecimals: true, decimals: 0});
		$("#umbral").kendoNumericTextBox({format: "p0", min: 0, restrictDecimals: true, decimals: 2});	

		$("#resolucion").kendoDropDownList({
			optionLabel: "Seleccione...",
			dataTextField: "Title",
			dataValueField: "Codigo",
			autoWidth: true
		});

		$("#empresa").kendoDropDownList({
			//optionLabel: "Seleccione...",
			dataTextField: "Title",
			dataValueField: "Codigo",
			autoWidth: true
		});

		$("#pais").kendoDropDownList({
			//optionLabel: "Seleccione...",
			dataTextField: "Title",
			dataValueField: "Codigo",
			autoWidth: true
		});

		$("#instancia").kendoDropDownList({
			optionLabel: "Seleccione...",
			dataTextField: "Title",
			dataValueField: "Codigo",
			autoWidth: true
		});

		$("#gridEvaluacion").kendoGrid({
			scrollable: false,
			columns: [{
				field: "num",
				title: "Nº", visible: false
			},
			{
				field: "sel",
				title: "Sel?", width: "60px"			
            },
			{
			    field: "ip",
			    title: "IP", width: "80px"
			},
			{
				field: "portafolio",
				title: "Portafolio", width: "80px"
			},
			{
				field: "nombre",
				title: "Nombre", width: "80px"
			},
			{
				field: "vicerrect",
				title: "Vicerrect.", width: "80px"
				//, editor: VicerrectoriaDropDownEditor
			},
			{
				field: "unidad",
				title: "Unidad", width: "80px"
			},
			{
				field: "prioridad",
				title: "Prioridad", width: "80px"
				, editor: PrioridadDropDownEditor
			},
			{
				field: "area",
				title: "Área", width: "80px"
				, editor: AreaDropDownEditor
			},			
			{
				field: "grupo",
				title: "Grupo", width: "80px"
			},
			{
				field: "equipo",
				title: "Equipo", width: "80px"
			},
			{
				field: "costoplan",
				title: "Costo Plan.", width: "80px"
				, editor: customKendoNumericEditor
			},
			{
				field: "costorev",
				title: "Costo Rev.", width: "80px"
				, editor: customKendoNumericEditor
				, footerTemplate: SumGeneral
				
			},
			{
				field: "plazosol",
				title: "Plazo Sol.", width: "80px"
				, editor: customKendoNumericEditor
			},
			{
				field: "plazorev",
				title: "Plazo Rev.", width: "80px"
				, editor: customKendoNumericEditor
			},
			{
				field: "periodo",
				title: "Período", width: "80px"
				, editor: PeriodoDropDownEditor
			},
			{
				field: "anio",
				title: "Año", width: "80px"
				, editor: customKendoNumericEditor
			},
			{
				field: "obs",
				title: "Obs. a los estimados", width: "180px"
			},
			{
				field: "cip",
				title: "CIP", width: "80px"
			},			
			{
			command:[ 
					{ name: "edit",	text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar"}},
					{ name: "destroy", text: "Borrar"}
				]
			}],				
			
			dataSource: evaluacionesDataSource,						
			height: 250,    			
			editable: {mode: "inline", confirmation: "Está seguro que desea borrar el registro?"}
		});

		$("#gridImpacto").kendoGrid({
			scrollable: false,
			columns: [{
				field: "num",
				title: "", visible: false
			},
			{
				field: "nombre",
				title: "Nombre", width: "180px"			
            },
			{
			    field: "unidadesprincipales1",
			    title: "Uni. Principales", width: "120px"
			},
			{
				field: "unidadesprincipales2",
			    title: "Uni. Principales", width: "120px"
			},
			{
				field: "oe1",
				title: "OE 1", width: "70px"
			},
			{
				field: "oe2",
				title: "OE 2", width: "70px"
			},
			{
				field: "oe3",
				title: "OE 3", width: "70px"
			},
			{
				field: "oe4",
				title: "OE 4", width: "70px"
			},
			{
				field: "oe5",
				title: "OE 5", width: "70px"
			},
			{
				field: "unidad1",
				title: "Unidad 1", width: "140px"
				, editor: ImpactoDropDownEditor
			},
			{
				field: "unidad2",
				title: "Unidad 2", width: "140px"
				, editor: ImpactoDropDownEditor
			},
			{
				field: "unidad3",
				title: "Unidad 3", width: "140px"
				, editor: ImpactoDropDownEditor
			},
			{
				field: "unidad4",
				title: "Unidad 4", width: "140px"
				, editor: ImpactoDropDownEditor
			},
			{
				field: "unidad5",
				title: "Unidad 5", width: "140px"
				, editor: ImpactoDropDownEditor
			},
			{
				field: "unidad6",
				title: "Unidad 6", width: "140px"
				, editor: ImpactoDropDownEditor
			},			
			{
			command:[ 
					{ name: "edit",	text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar"}},
					{ name: "destroy", text: "Borrar"}
				]
			}],				
			toolbar: [
				{ name:'create',  text : 'Crear' }
			],
			dataSource: impactosDataSource,						
			height: 150,    			
			editable: {mode: "inline", confirmation: "Está seguro que desea borrar el registro?"}
		});

		$("#gridAutorizaciones").kendoGrid({
			scrollable: false,
			columns: [{
				field: "num",
				title: "Nº", visible: false
			},
			{
				field: "persona",
				title: "Persona", width: "270px",
				editor: customPersonaEditor			
            },
			{
			    field: "cargo",
			    title: "Cargo", width: "180px"
			},
			{
				field: "fecha",
				title: "Fecha Autorización", width: "200px", format: "{0:dd/MM/yyyy}",
				editor: customDatePickerEditor
			},
			{
				field: "observaciones",
				title: "Observaciones", width: "320px"
			},			
			{
			command:[ 
					{ name: "edit",	text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar"}},
					{ name: "destroy", text: "Borrar"}
				]
			}],				
			toolbar: [
				{ name:'create',  text : 'Crear' }
			],
			dataSource: impactosDataSource,
			height: 150,    			
			editable: {mode: "inline", confirmation: "Está seguro que desea borrar el registro?"}
		});

		getDropdownValues();
    }    

    function OnFailure(sender, args) {		
		console.log(args.get_stackTrace());
    }
    
    function getDatosIdea(){		        
        context = SP.ClientContext.get_current();		
        var targetList = context.get_web().get_lists().getByTitle('Idea');
		var caml = "<View><RowLimit>100</RowLimit></View>";		
		var camlQuery = new SP.CamlQuery();
		camlQuery.set_viewXml(caml);
		projList = targetList.getItems(camlQuery);
		context.load(projList);
		context.executeQueryAsync(getDatosIdeaOnSuccess, OnFailure);

	}

	function getDatosIdeaOnSuccess(sender, request) {		        
		var ideaEnumerator = projList.getEnumerator();
		while (ideaEnumerator.moveNext()) {
			var idea = ideaEnumerator.get_current();
			if (idea.get_item("Preselecciona") == "Sí")
			{
				var evalucion = new Object();

				evalucion.num = idea.get_id().toString();
				evalucion.sel = false;
				evalucion.ip = idea.get_item("CodigoIP");
				evalucion.portafolio = idea.get_item("anoPortafolio");
				evalucion.nombre = idea.get_item("Title");
				evalucion.vicerrect = idea.get_item("unidadSolicitante");
				evalucion.unidad = idea.get_item("unidadCliente");
				evalucion.prioridad = idea.get_item("Prioridad");
				evalucion.area = idea.get_item("area");
				evalucion.grupo = idea.get_item("equipoGrupo");
				evalucion.equipo = idea.get_item("equipo");
				evalucion.costoplan = idea.get_item("costoInvPlanificado");
				evalucion.costorev = idea.get_item("costoInvRevisado");
				evalucion.plazosol = idea.get_item("plazoEstimado");
				evalucion.plazorev = idea.get_item("plazoEstimado");
				evalucion.periodo = idea.get_item("periodoOperacion");
				evalucion.anio = idea.get_item("anoOperacion");
				evalucion.obs = "";
				evalucion.cip = idea.get_item("cipAsociado");			
	
				evaluaciones.push(evalucion);  
			}						
			evaluacionesDataSource.read(evaluaciones);
		}		
	}

	function getDropdownValues(){		
		context = SP.ClientContext.get_current();		
		var targetList = context.get_site().get_rootWeb().get_lists().getByTitle('Maestro Detalle');		
		var camlQuery = SP.CamlQuery.createAllItemsQuery();		
		paramList = targetList.getItems(camlQuery);
		context.load(paramList);
		context.executeQueryAsync(getDropdownValuesOnSuccess, OnFailure);
	}

	var maestroResolucion = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroEmpresa = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroPais = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroInstancia = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroPrioridad = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroArea = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroEquipo = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroImpacto = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroCargo = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroVicerrectoria = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroPeriodo = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	var maestroMoneda = new kendo.data.DataSource({schema: {model: {id: "Codigo", fields: {Codigo: { type: "string" }, Title: { type: "string" }}}}});	
	
	function getDropdownValuesOnSuccess(sender, args){
		var oEnumerator = paramList.getEnumerator();
		while (oEnumerator.moveNext()) {
			var item = oEnumerator.get_current();	
			switch(item.get_item("LLave")){
				case "Año Portafolio":
					if (item.get_item("Vigente") == true)
						$("#portafolio").val(item.get_item("Title"));
					break;
				case "Portafolio":
				if (item.get_item("Vigente") == true)
						maestroPortafolio.add({
							"Title": item.get_item("Title"), 
							"Codigo": item.get_item("Codigo")				
						});
					break;
				case "Empresa":
				if (item.get_item("Vigente") == true)
					maestroEmpresa.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;
				case "País/Sede":
				if (item.get_item("Vigente") == true)
					maestroPais.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;
				case "Instancia":
				if (item.get_item("Vigente") == true)
					maestroInstancia.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;
				case "Prioridad":
				if (item.get_item("Vigente") == true)
					maestroPrioridad.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;
				case "Área":
				if (item.get_item("Vigente") == true)
					maestroArea.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;				
				case "Equipo":
				if (item.get_item("Vigente") == true)
					maestroEquipo.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;
				case "Impacto":
				if (item.get_item("Vigente") == true)
					maestroImpacto.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;
				case "Cargo":
				if (item.get_item("Vigente") == true)
					maestroCargo.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
					break;
				case "Periodo Operación":
					if (item.get_item("Vigente") == true)
						maestroPeriodo.add({	
							"Title": item.get_item("Title"), 
							"Codigo": item.get_item("Codigo")				
						});
						break;
				case "Resolución":
					if (item.get_item("Vigente") == true)
						maestroResolucion.add({	
							"Title": item.get_item("Title"), 
							"Codigo": item.get_item("Codigo")				
						});
						break;	
				case "Moneda":
						if (item.get_item("Vigente") == true)
							maestroMoneda.add({	
								"Title": item.get_item("Title"), 
								"Codigo": item.get_item("Codigo")				
							});
							break;		
			}
			switch(item.get_item("Padre")){
				case "Unidad Organizacional":
					if (item.get_item("Vigente") == true)
					maestroVicerrectoria.add({
						"Title": item.get_item("Title"), 
						"Codigo": item.get_item("Codigo")				
					});
				break;
			} 
					
		}
				
		var ddlEmpresa = $("#empresa").data("kendoDropDownList");
		ddlEmpresa.setDataSource(maestroEmpresa);		
		ddlEmpresa.select(0);
		var ddlPais = $("#pais").data("kendoDropDownList");
		ddlPais.setDataSource(maestroPais);	
		ddlPais.select(0);
		$("#instancia").data("kendoDropDownList").setDataSource(maestroInstancia);	
		ddlPais.setDataSource(maestroPais);	
		ddlPais.select(0);
		$("#resolucion").data("kendoDropDownList").setDataSource(maestroResolucion);			
		//$("#ddlmoneda").data("kendoDropDownList").setDataSource(maestroMoneda);			

		getDatosIdea();
	}

	var publics = {	
		SetControls: setControls
	}; 
	
	return publics;
}

function initializePeoplePicker(peoplePickerElementId, defaultSet) {

	var schema = {};
	schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
	schema['SearchPrincipalSource'] = 15;
	schema['ResolvePrincipalSource'] = 15;
	schema['AllowMultipleValues'] = false;
	schema['MaximumEntitySuggestions'] = 50;
	schema['Width'] = '280px';
	//console.log(schema);
	SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, defaultSet, schema);
	//$("#peoplePickerDiv_TopSpan").removeClass("sp-peoplepicker-topLevel").addClass("form-control");
}

function SetPickerValue(pickerid, key, dispval){
    var xml = '<Entities Append="False" Error="" Separator=";" MaxHeight="3">';
    xml = xml + PreparePickerEntityXml(key, dispval);
    xml = xml + '</Entities>';

    EntityEditorCallback(xml, pickerid, true);
}

function PreparePickerEntityXml(key, dispval){
	console.log(key);
	console.log(dispval);
    return '<Entity Key="' + key + '" DisplayText="' + dispval + '" IsResolved="True" Description="' + key + '"><MultipleMatches /></Entity>';
}

function getUserInfo() {
	var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv_TopSpan;

	var users = peoplePicker.GetAllUserInfo();
	var userInfo = '';
	for (var i = 0; i < users.length; i++) {
		var user = users[i];
		for (var userProperty in user) { 
			userInfo += userProperty + ':  ' + user[userProperty] + '<br>';
		}
	}
	$('#resolvedUsers').html(userInfo);

	var keys = peoplePicker.GetAllUserKeys();
	$('#userKeys').html(keys);
	getUserId(users[0].Key);
}

function getUserId(loginName) {	
	context.load(user);
	context.executeQueryAsync(
		 Function.createDelegate(null, getUserIdEnsureUserSuccess), 
		 Function.createDelegate(null, getUserIdOnFail)
	);
}

function getUserIdEnsureUserSuccess() {
	console.log(user);
	$('#userId').html(user.get_id());
}

function getUserIdOnFail(sender, args) {
	alert('Query failed. Error: ' + args.get_message());
}