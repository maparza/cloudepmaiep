var OsirisApp = window.OsirisApp || {};
OsirisApp.Idea = OsirisApp.Idea || {};

$(document).ready(function() {
    "use strict";
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', OsirisApp.Idea.Init);
    //	OsirisApp.Idea.Init();
});

OsirisApp.Idea.Init = function() {
    "use strict";
    kendo.culture("es-CL");
    OsirisApp.Idea.NewWork = new OsirisApp.Idea.Work();
    OsirisApp.Idea.NewWork.SetControls();
};

OsirisApp.Idea.Work = function() {

        var nombreIniciativa;
        var nombreProyecto;
        var currList;
        var currentItem;
        var context;
        var oListItem;
        var itemId;
        var patrocinador;
        var userSearchPatrocinador;
        var userSearchCliente;
        var userSearchGPortafolio;
        var userSearchGDemanda;
        var userSearchEvaluador;
        var textoCIP;


        var data_selectUnidadSolicitante = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectEmpresa = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectPaisSede = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectUnidadCliente = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectUnidadPortafolio = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectUnidadDemanda = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectMasterPlan = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectCategoria = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectEje = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectSubEje = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectSubCategoria = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectPrograma = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectComponente = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectDivisional = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectCentroCosto = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectCuenta = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectFuncionNegocio = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectTamano = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectReferencia = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectNaturaleza = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectAnoPortafolio = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectExigeCasoNegocio = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectEstructuraPEP = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectCIPAsociado = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        NCIP: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectArea = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectTipoCosto = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectEquipo = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectEquipoGrupo = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectUnidadUsuaria = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectPeriodoOperacion = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });
        var data_selectAnoOperacion = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Codigo",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }
        });

        var data_gridImpUsu = [];
        var data_gridImpUsuDataNextID = data_gridImpUsu == null ? 1 : data_gridImpUsu.length + 1;

        function getGridImpUsuIndexById(id) {
            var idx,
                l = data_gridImpUsu.length;

            for (var j = 0; j < l; j++) {
                if (data_gridImpUsu[j].num == id) {
                    return j;
                }
            }
            return null;
        }
        var data_gridImpUsuDataSource = new kendo.data.DataSource({
            data: data_gridImpUsu,
            transport: {
                read: function(e) {
                    e.success(data_gridImpUsu);
                },
                create: function(e) {
                    e.data.num = data_gridImpUsuDataNextID++;
                    data_gridImpUsu.push(e.data);
                    e.success(e.data);
                },
                update: function(e) {
                    data_gridImpUsu[getGridImpUsuIndexById(e.data.num)] = e.data;
                    var jsonData = JSON.stringify(data_gridImpUsu);
                    e.success();
                },
                destroy: function(e) {
                    data_gridImpUsu.splice(getGridImpUsuIndexById(e.data.num), 1);
                    e.success();
                }
            },
            error: function(e) {
                // handle data operation error
                kendo.alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            batch: false,
            schema: {
                model: {
                    id: "num",
                    fields: {
                        num: { editable: false },
                        proceso: { validation: { required: true } },
                        impacto: { validation: { required: true } }
                    }
                }
            }
        });
        var data_gridObjEsp = [];
        var data_gridObjEspDataNextID = data_gridObjEsp == null ? 1 : data_gridObjEsp.length + 1;

        function getGridObjEspIndexById(id) {
            var idx,
                l = data_gridObjEsp.length;

            for (var j = 0; j < l; j++) {
                if (data_gridObjEsp[j].num == id) {
                    return j;
                }
            }
            return null;
        }
        var data_gridObjEspDataSource = new kendo.data.DataSource({
            data: data_gridObjEsp,
            transport: {
                read: function(e) {
                    e.success(data_gridObjEsp);
                },
                create: function(e) {
                    e.data.num = data_gridObjEspDataNextID++;
                    data_gridObjEsp.push(e.data);
                    e.success(e.data);
                },
                update: function(e) {
                    data_gridObjEsp[getGridObjEspIndexById(e.data.num)] = e.data;
                    var jsonData = JSON.stringify(data_gridObjEsp);
                    e.success();
                },
                destroy: function(e) {
                    data_gridObjEsp.splice(getGridObjEspIndexById(e.data.num), 1);
                    e.success();
                }
            },
            error: function(e) {
                // handle data operation error
                kendo.alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            batch: false,
            schema: {
                model: {
                    id: "num",
                    fields: {
                        num: { editable: false },
                        enunciadoDelObjetivo: { validation: { required: true } }
                        //					__kendo_devtools_id: { hidden: true }
                    }
                }
            }
        });
        var data_gridAliEst = [];
        var data_gridAliEstDataNextID = data_gridAliEst == null ? 1 : data_gridAliEst.length + 1;

        function getGridAliEstIndexById(id) {
            var idx,
                l = data_gridAliEst.length;

            for (var j = 0; j < l; j++) {
                if (data_gridAliEst[j].num == id) {
                    return j;
                }
            }
            return null;
        }
        var data_gridAliEstDataSource = new kendo.data.DataSource({
            data: data_gridAliEst,
            transport: {
                read: function(e) {
                    e.success(data_gridAliEst);
                },
                create: function(e) {
                    e.data.num = data_gridAliEstDataNextID++;
                    data_gridAliEst.push(e.data);
                    e.success(e.data);
                },
                update: function(e) {
                    data_gridAliEst[getGridAliEstIndexById(e.data.num)] = e.data;
                    var jsonData = JSON.stringify(data_gridAliEst);
                    e.success();
                },
                destroy: function(e) {
                    data_gridAliEst.splice(getGridAliEstIndexById(e.data.num), 1);
                    e.success();
                }
            },
            error: function(e) {
                // handle data operation error
                kendo.alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            schema: {
                model: {
                    id: "num",
                    fields: {
                        num: { editable: false, hidden: true },
                        objetivosEstrategicos: { validation: { required: true } }
                    }
                }

            }
        });
        var data_gridBenEsp = [];
        var data_gridBenEspDataNextID = data_gridBenEsp == null ? 1 : data_gridBenEsp.length + 1;

        function getGridBenEspIndexById(id) {
            var idx,
                l = data_gridBenEsp.length;

            for (var j = 0; j < l; j++) {
                if (data_gridBenEsp[j].num == id) {
                    return j;
                }
            }
            return null;
        }
        var data_gridBenEspDataSource = new kendo.data.DataSource({
            data: data_gridBenEsp,
            transport: {
                read: function(e) {
                    e.success(data_gridBenEsp);
                },
                create: function(e) {
                    e.data.num = data_gridBenEspDataNextID++;
                    data_gridBenEsp.push(e.data);
                    e.success(e.data);
                },
                update: function(e) {
                    data_gridBenEsp[getGridBenEspIndexById(e.data.num)] = e.data;
                    var jsonData = JSON.stringify(data_gridBenEsp);
                    e.success();
                },
                destroy: function(e) {
                    data_gridBenEsp.splice(getGridBenEspIndexById(e.data.num), 1);
                    e.success();
                }
            },
            error: function(e) {
                kendo.alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            batch: false,
            schema: {
                model: {
                    id: "num",
                    fields: {
                        num: { editable: false },
                        beneficiosPorAlcanzar: { validation: { required: true } }
                    }
                }
            }
        });



        function setControls() {
            var pageTitle = $("#DeltaPlaceHolderPageTitleInTitleArea");
            if (pageTitle != null) pageTitle.hide();

            $("#menu").kendoMenu();

            $("#TabIdentificacion").show();
            $("#TabJustificacion").hide();
            $("#TabCategorizacion").hide();
            $("#TabEstimacion").hide();

            var menu = $("#menu").data("kendoMenu");

            menu.bind("select", function(e) {
                switch (e.item.childNodes[0].innerHTML) {
                    case "Identificación":
                        $("#TabIdentificacion").show();
                        $("#TabJustificacion").hide();
                        $("#TabCategorizacion").hide();
                        $("#TabEstimacion").hide();
                        break;
                    case "Justificación":
                        $("#TabIdentificacion").hide();
                        $("#TabJustificacion").show();
                        $("#TabCategorizacion").hide();
                        $("#TabEstimacion").hide();
                        break;
                    case "Categorización":
                        $("#TabIdentificacion").hide();
                        $("#TabJustificacion").hide();
                        $("#TabCategorizacion").show();
                        $("#TabEstimacion").hide();
                        break;
                    case "Estimación":
                        $("#TabIdentificacion").hide();
                        $("#TabJustificacion").hide();
                        $("#TabCategorizacion").hide();
                        $("#TabEstimacion").show();
                        break;
                }
            });

            $("#fechaCreacion").kendoDatePicker();
            $("#fechaEvaluacion").kendoDatePicker();



            $("#selectUnidadSolicitante").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Title",
                autoWidth: true
            });
            $("#selectEmpresa").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectPaisSede").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectUnidadCliente").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectUnidadPortafolio").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectUnidadDemanda").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectMasterPlan").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectCategoria").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectEje").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectSubEje").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectSubCategoria").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectPrograma").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectComponente").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectDivisional").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectCentroCosto").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectCuenta").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectFuncionNegocio").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectTamano").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectReferencia").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectNaturaleza").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectAnoPortafolio").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectExigeCasoNegocio").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectEstructuraPEP").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectCIPAsociado").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "NCIP",
                dataValueField: "Title",
                autoWidth: true
            });
            $("#selectArea").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectTipoCosto").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectEquipo").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectEquipoGrupo").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectUnidadUsuaria").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectPeriodoOperacion").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });
            $("#selectAnoOperacion").kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Codigo",
                autoWidth: true
            });



            $("#gridObjetivosEspecificos").kendoGrid({
                scrollable: false,
                columns: [
                    { field: "num", title: "N°" },
                    { field: "enunciadoDelObjetivo", title: "Enunciado del Objetivo" },
                    {
                        command: [
                            { name: "edit", text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar" } },
                            { name: "destroy", text: "Borrar" }
                        ]
                    }
                ],
                toolbar: [
                    { name: 'create', text: 'Crear' }
                ],
                dataSource: data_gridObjEspDataSource,
                editable: { mode: "inline", confirmation: "Está seguro que desea borrar el registro?" }
            });

            $("#gridParticipantesLicitacion").kendoGrid({
                scrollable: false,
                columns: [
                    { field: "empresa", title: "Empresa" },
                    { field: "clpEstimado", title: "CLP$ Estimado" },
                    {
                        command: [
                            { name: "edit", text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar" } },
                            { name: "destroy", text: "Borrar" }
                        ]
                    }
                ],
                toolbar: [
                    { name: 'create', text: 'Crear' }
                ],
                dataSource: data_gridObjEspDataSource,
                editable: { mode: "inline", confirmation: "Está seguro que desea borrar el registro?" }
            });


            $("#gridAlineamEstrategico").kendoGrid({
                scrollable: false,
                columns: [
                    { field: "num", title: "ID", hidden: true },
                    {
                        field: "objetivosEstrategicos",
                        title: "Objetivo Estratégico de la Organización",
                        editor: ObjEstObligatorioDropDownEditor
                    },
                    {
                        command: [
                            { name: "edit", text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar" } },
                            { name: "destroy", text: "Borrar" }
                        ]
                    }
                ],
                toolbar: [
                    { name: 'create', text: 'Crear' }
                ],
                dataSource: data_gridAliEstDataSource,
                editable: { mode: "inline", confirmation: "Está seguro que desea borrar el registro?" }
            });

            $("#gridBeneficiosEsperados").kendoGrid({
                scrollable: false,
                columns: [
                    { field: "num", title: "N°" },
                    { field: "beneficiosPorAlcanzar", title: "Beneficio por Alcanzar" },
                    {
                        command: [
                            { name: "edit", text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar" } },
                            { name: "destroy", text: "Borrar" }
                        ]
                    }
                ],
                toolbar: [
                    { name: 'create', text: 'Crear' }
                ],
                dataSource: data_gridBenEspDataSource,
                editable: { mode: "inline", confirmation: "Está seguro que desea borrar el registro?" }
            });


            $("#gridImpactoUsuarios").kendoGrid({
                scrollable: false,
                columns: [
                    { field: "num", title: "N°" },
                    { field: "proceso", title: "Proceso" },
                    { field: "impacto", title: "Impacto" },
                    {
                        command: [
                            { name: "edit", text: { edit: "Editar", update: "Actualizar", cancel: "Cancelar" } },
                            { name: "destroy", text: "Borrar" }
                        ]
                    }
                ],
                toolbar: [
                    { name: 'create', text: 'Crear' }
                ],
                dataSource: data_gridImpUsuDataSource,
                editable: { mode: "inline", confirmation: "Está seguro que desea borrar el registro?" }
            });


            initializePeoplePicker('ppPatrocinador', null);
            initializePeoplePicker('ppCliente', null);
            initializePeoplePicker('ppGestorDePortafolio', null);
            initializePeoplePicker('ppGestorDemanda', null);
            initializePeoplePicker('ppGDemandaEval', null);







            $("#btnGuardar").on("click", OsirisApp.Idea.NewWork.GuardarFormulario);
            $("#btnCancelar").on("click", OsirisApp.Idea.NewWork.CancelarFormulario)
            $("#selectUnidadSolicitante").on("change", OsirisApp.Idea.NewWork.GetunidadUsuariaValue);
            $("#selectComponente").on("change", OsirisApp.Idea.NewWork.Set_selectExigeCasoNegocio);
            $("#selectTamano").on("change", OsirisApp.Idea.NewWork.Set_selectExigeCasoNegocio);
            $("#costoInvPlanificado").on("change", OsirisApp.Idea.NewWork.Set_selectselectTipoCosto);
            $("#selectCIPAsociado").on("change", OsirisApp.Idea.NewWork.EntregaTextoCIP);
            getDropDownValues();
            getDropDownValuesCodeCIPAsociado();


        }


        function set_selectselectTipoCosto() {
            context = SP.ClientContext.get_current();
            var targetList = context.get_site().get_rootWeb().get_lists().getByTitle('Maestro Detalle');
            var caml = "<View></View>";
            var camlQuery = new SP.CamlQuery();
            camlQuery.set_viewXml(caml);
            paramList = targetList.getItems(camlQuery);
            context.load(paramList);
            context.executeQueryAsync(set_selectselectTipoCostoOnSuccess, OnFailure);
        }

        function set_selectselectTipoCostoOnSuccess(sender, args) {
            var getMontoMinInv;
            var oEnumerator = paramList.getEnumerator();
            while (oEnumerator.moveNext()) {
                var item = oEnumerator.get_current();
                switch (item.get_item("LLave")) {
                    case "Monto mínimo inversión (MM$)":
                        getMontoMinInv = parseInt(item.get_item("Title"));
                        break;
                }
            }
            if ($("#costoInvPlanificado").val() < getMontoMinInv) {
                $("#selectTipoCosto").data("kendoDropDownList").value("Operación");
            } else {
                $("#selectTipoCosto").data("kendoDropDownList").value("Inversión");
            }
        }

        function set_selectExigeCasoNegocio() {
            if (
                $("#selectComponente").data("kendoDropDownList").value() == "PR" ||
                $("#selectTamano").data("kendoDropDownList").value() == "Mega" ||
                $("#selectTamano").data("kendoDropDownList").value() == "Grande") {
                $("#selectExigeCasoNegocio").data("kendoDropDownList").value("Sí");
            } else {
                $("#selectExigeCasoNegocio").data("kendoDropDownList").value("No");
            }
        }



        function getunidadUsuariaValue() {
            context = SP.ClientContext.get_current();
            var targetList = context.get_site().get_rootWeb().get_lists().getByTitle('Maestro Detalle');
            var caml = "<View></View>";
            var camlQuery = new SP.CamlQuery();
            camlQuery.set_viewXml(caml);
            paramList = targetList.getItems(camlQuery);
            context.load(paramList);
            context.executeQueryAsync(getunidadUsuariaValueOnSuccess, OnFailure);
        }

        function getunidadUsuariaValueOnSuccess(sender, args) {
            data_selectUnidadUsuaria = new kendo.data.DataSource({
                schema: {
                    model: {
                        id: "Codigo",
                        fields: {
                            Codigo: { type: "string" },
                            Title: { type: "string" }
                        }
                    }
                }
            });
            var oEnumerator = paramList.getEnumerator();
            while (oEnumerator.moveNext()) {
                var item = oEnumerator.get_current();
                switch (item.get_item("LLave")) {
                    case $("#selectUnidadSolicitante").val():
                        data_selectUnidadUsuaria.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                }
            }
            $("#selectUnidadUsuaria").data("kendoDropDownList").setDataSource(data_selectUnidadUsuaria);
        }

        function getIdea() {
            context = SP.ClientContext.get_current();
            var targetList = context.get_web().get_lists().getByTitle("Idea");
            itemId = parseInt(GetUrlKeyValue('ID'));
            var caml = "<View></View>";
            var camlQuery = new SP.CamlQuery();
            camlQuery.set_viewXml(caml);
            currList = targetList.getItems(camlQuery);
            context.load(currList);
            context.executeQueryAsync(getIdeaOnSuccess, OnFailure);
        }

        function getAutorizacionIGOnSuccess(sender, args) {
            var projEnumerator = currList.getEnumerator();
            while (projEnumerator.moveNext()) {
                var proj = projEnumerator.get_current();
                switch (proj.get_item("ID")) {
                    case itemId:
                        //IP del Proyecto
                        $("#IP").val(proj.get_item("CodigoIP"));

                        //Nombre del Proyecto
                        nombreProyecto = proj.get_item("Title");
                        $("#NombreIniciativa").val(nombreProyecto);

                        //Fecha Solicitud
                        var fechaSolicitud = $("#fechaSolicitud").data("kendoDatePicker");
                        fechaSolicitud.value(proj.get_item("fechaSolicitud"));

                        //Gestor de la Demanda
                        setPeoplePickerDefaultValueGDemanda(proj.get_item("GestorDeDemanda").get_lookupValue());

                        //Fecha de Modificación
                        var fechaModificacion = $("#fechaModificacion").data("kendoDatePicker");
                        fechaModificacion.value(proj.get_item("fechaModificacion"));

                        //Jefe de Proyecto
                        $("#jefeProyecto").val(proj.get_item("jefeProyecto"));

                        //Unidad Solicitante						
                        var unidadSolicitante = $("#selectUnidadSolicitante").data("kendoDropDownList");
                        unidadSolicitante.value(proj.get_item("unidadSolicitante"));

                        //Unidad Ejecutante
                        var unidadEjecutante = $("#selectUnidadEjecutante").data("kendoDropDownList");
                        unidadEjecutante.value(proj.get_item("unidadEjecutante"));

                        //Tipo de Licitación
                        $("input:radio[name=optTipoLicitacion][value=" + proj.get_item("TipoLicitacion") + "]").prop('checked', true);

                        //Nombre del Contrato
                        $("#txtNombreContrato").val(proj.get_item("NombreContrato"));

                        //Presupuesto total estimado (con IVA) 
                        $("#txtPresupestoTotalIva").val(proj.get_item("PresupestoTotalIva"));

                        //Fuente
                        $("input:radio[name=Fuente][value=" + proj.get_item("optFuente") + "]").prop('checked', true);

                        //Moneda
                        var moneda = $("#selectMoneda").data("kendoDropDownList");
                        Moneda.value(proj.get_item("Moneda"));

                        //Moneda Descripción

                        //Modalidad
                        $("input:radio[name=Modalidad][value=" + proj.get_item("optModalidad") + "]").prop('checked', true);

                        //N° CIP (Capex)
                        var cipAsociado = $("#selectCIPAsociado").data("kendoDropDownList");
                        cipAsociado.text(proj.get_item("cipAsociado"));

                        //N° Registro (Opex)
                        var registro = $("#selectnumRegistro").data("kendoDropDownList");
                        registro.text(proj.get_item("numRegistro"));

                        //IP Proyecto Swap

                        //Nombre Proyecto Swap

                        //Justificación y Observaciones Swap
                        $("#txtJustyObs").val(proj.get_item("JustyObs"));

                        //Presupuesto Autorizado

                        //Comprometido Autorizado

                        //Presupuesto Autorizado

                        //Comprometido Autorizado

                        //Disponible Autorizado

                        //Presupuesto Swap

                        //Comprometido Swap

                        //Disponible Swap

                        //Presupuesto Total

                        //Comprometido Total		

                        //Disponible Total

                        /*						4. Participantes Invitados a la Licitación						*/

                        //Empresa
                        var empresa = $("#selectEmpresa").data("kendoDropDownList");
                        empresa.value(proj.get_item("empresa"));

                        //CLP$ Estimado

                        // Total CLP$ Estimado

                        //Checkbox "Lista Para Envío"


                        /*									TAB JUSTIFICACIÓN									*/

                        /*					5. Solicitud de Autorización para Adjudicar Contrato(s)				*/

                        //Presupuesto Autorizado a Adjudicar (copia "Disponible Total" tab Solicitud)

                        //Fecha Adjudicación

                        //Moneda (copia tab "Solicitud")

                        //Fecha de Conversión

                        //Valor Conversión

                        /*								6. Participantes Licitación								*/

                        //Empresa 

                        //CLP$ Estimado (Copia tab Solicitud)

                        //CLP$ Adjudicado

                        //Tipo de Contrato

                        //Modalidad

                        /*								7. Aprobación de Comité									*/

                        //N° Resolución

                        //Fecha Sansión

                        //Instancia Aprobación

                        //Estado de Aprobación

                        //Observaciones sobre la Resolución

                        /*										TAB FLUJOS										*/

                        /*								8. Flujos de Pago Programados							*/

                        //Empresa

                        //Enero

                        //Febrero

                        //Marzo

                        //Abril

                        //Mayo

                        //Junio

                        //Julio

                        //Agosto

                        //Septiembre

                        //Octubre

                        //Noviembre

                        //Diciembre

                        //Total

                        //Enero Total

                        //Febrero Total

                        //Marzo Total

                        //Abril Total

                        //Mayo Total

                        //Junio Total

                        //Julio Total

                        //Agosto Total

                        //Septiembre Total

                        //Octubre Total

                        //Noviembre Total

                        //Diciembre Total

                        //Total X Total

                        //Checkbox "Lista Para Envío"

                        /*									TAB FORMALIZACIÓN									*/

                        /* 				9. Registro de las Ordenes de Compra y Contratos Asociados	 			*/

                        //Empresa

                        //N° de Solicitud de Compra

                        //F. Solcitud de Compra

                        //N° OC Compra

                        //Fecha OC de Compra

                        //N° Solicitud del Contrato

                        //F. Firma del Contrato

                        //Resp. Contrato

                        /* 			10. Autorización de las Ordenes de Compra y Contratos Asociados 			*/

                        //Empresa

                        //Instancia de la OC

                        //F. Solicitud de la OC

                        //F. Autorización de la OC

                        //Autorizador de la OC

                        //Instancia del Contrato

                        //F. Solicitud del Contrato

                        //F. Firma del Contrato

                        //Autorizador del Contrato

                        //Checkbox "Lista Para Envío"

                        //Check Listo Para Envío
                        $("#listoParaEnvio").prop("checked", proj.get_item("Listo"));

                        //$("#txtproposito").val(proj.get_item("proposito"));
                        //$("#txtDeclaracion").val(proj.get_item("declaracionProblemaUOportunidad"));
                        //$("#txtConcecuancias").val(proj.get_item("consecuaciasNoRealizarIniciativa"));
                        //$("input:radio[name=optPrioridad][value=" + proj.get_item("Prioridad") + "]").prop('checked', true);
                        //$("input:radio[name=optValor][value=" + proj.get_item("valor") + "]").prop('checked', true);
                        //$("input:radio[name=optUrgencia][value=" + proj.get_item("urgencia") + "]").prop('checked', true);
                        /* var objetivosEspecificosJson = proj.get_item("objetivosEspecificos")
                        if (objetivosEspecificosJson != null) {
                            data_gridObjEsp = JSON.parse(objetivosEspecificosJson);
                            data_gridObjEspDataSource.read(data_gridObjEsp);
                            var grid = $("#gridObjetivosEspecificos").data("kendoGrid");
                            grid.refresh();
                        }
                        var objetivosEstrategicosJson = proj.get_item("objetivosEstrategicos")
                        if (objetivosEstrategicosJson != null) {
                            data_gridAliEst = JSON.parse(objetivosEstrategicosJson);
                            data_gridAliEstDataSource.read(data_gridAliEst);
                            var grid = $("#gridAlineamEstrategico").data("kendoGrid");
                            grid.refresh();
                        }
                        var BeneficiosEsperadosJson = proj.get_item("BeneficiosEsperados")
                        if (BeneficiosEsperadosJson != null) {
                            data_gridBenEsp = JSON.parse(BeneficiosEsperadosJson);
                            data_gridBenEspDataSource.read(data_gridBenEsp);
                            var grid = $("#gridBeneficiosEsperados").data("kendoGrid");
                            grid.refresh();
                        }
                        var ImpactoUsuariosJson = proj.get_item("impactoEnUsuarios")
                        if (ImpactoUsuariosJson != null) {
                            data_gridImpUsu = JSON.parse(ImpactoUsuariosJson);
                            data_gridImpUsuDataSource.read(data_gridImpUsu);
                            var grid = $("#gridImpactoUsuarios").data("kendoGrid");
                            grid.refresh();
                        }*/
                        //var categoria = $("#selectCategoria").data("kendoDropDownList");
                        //categoria.value(proj.get_item("categoria"));
                        //var eje = $("#selectEje").data("kendoDropDownList");
                        //eje.value(proj.get_item("eje"));
                        //var subEje = $("#selectSubEje").data("kendoDropDownList");
                        //subEje.value(proj.get_item("subEje"));
                        //var subCategoria = $("#selectSubCategoria").data("kendoDropDownList");
                        //subCategoria.value(proj.get_item("subCategoria"));
                        //var programa = $("#selectPrograma").data("kendoDropDownList");
                        //programa.value(proj.get_item("programa"));
                        //var componente = $("#selectComponente").data("kendoDropDownList");
                        //componente.value(proj.get_item("componente"));
                        //var divisional = $("#selectDivisional").data("kendoDropDownList");
                        //divisional.value(proj.get_item("divisional"));
                        //var centroCosto = $("#selectCentroCosto").data("kendoDropDownList");
                        //centroCosto.value(proj.get_item("centroCosto"));
                        //var cuenta = $("#selectCuenta").data("kendoDropDownList");
                        //cuenta.value(proj.get_item("cuenta"));
                        //var funcionNegocio = $("#selectFuncionNegocio").data("kendoDropDownList");
                        //funcionNegocio.value(proj.get_item("funcionNegocio"));
                        //$("input:radio[name=tipoProyecto][value=" + proj.get_item("tipoProyecto") + "]").prop('checked', true);
                        //$("input:radio[name=claseProyecto][value=" + proj.get_item("claseProyecto") + "]").prop('checked', true);
                        //var tamano = $("#selectTamano").data("kendoDropDownList");
                        //tamano.value(proj.get_item("tamano"));
                        //$("input:radio[name=origen][value=" + proj.get_item("origen") + "]").prop('checked', true);
                        //var referencia = $("#selectReferencia").data("kendoDropDownList");
                        //referencia.value(proj.get_item("referencia"));
                        //$("input:radio[name=complejidad][value=" + proj.get_item("complejidad") + "]").prop('checked', true);
                        //var naturaleza = $("#selectNaturaleza").data("kendoDropDownList");
                        //naturaleza.value(proj.get_item("naturaleza"));
                        //var anoPortafolio = $("#selectAnoPortafolio").data("kendoDropDownList");
                        //anoPortafolio.value(proj.get_item("anoPortafolio"));
                        //var exigeCasoNegocio = $("#selectExigeCasoNegocio").data("kendoDropDownList");
                        //exigeCasoNegocio.value(proj.get_item("ExigeCasoNegocio"));
                        //var estructuraPEP = $("#selectEstructuraPEP").data("kendoDropDownList");
                        //estructuraPEP.value(proj.get_item("ExigeEstructuraPEP"));
                        //var area = $("#selectArea").data("kendoDropDownList");
                        //area.value(proj.get_item("area"));
                        //var tipoCosto = $("#selectTipoCosto").data("kendoDropDownList");
                        //tipoCosto.value(proj.get_item("tipoCosto"));
                        //var equipo = $("#selectEquipo").data("kendoDropDownList");
                        //equipo.value(proj.get_item("equipo"));
                        //var equipoGrupo = $("#selectEquipoGrupo").data("kendoDropDownList");
                        //equipoGrupo.value(proj.get_item("equipoGrupo"));
                        //var unidadUsuaria = $("#selectUnidadUsuaria").data("kendoDropDownList");
                        //unidadUsuaria.value(proj.get_item("unidadUsuaria"));
                        //var fechaEvaluacion = $("#fechaEvaluacion").data("kendoDatePicker");
                        //fechaEvaluacion.value(proj.get_item("fechaEvaluacion"));
                        /*$("#costoInvPlanificado").val(proj.get_item("costoInvPlanificado"));
                        $("#costoInvRevisado").val(proj.get_item("costoInvRevisado"));
                        $("#costoOpPlanificado").val(proj.get_item("costoOpPlanificado"));
                        $("#costoOpRevisado").val(proj.get_item("costoOpRevisado"));
                        $("#plazoEstimado").val(proj.get_item("plazoEstimado"));
                        var periodoOperacion = $("#selectPeriodoOperacion").data("kendoDropDownList");
                        periodoOperacion.value(proj.get_item("periodoOperacion"));
                        var anoOperacion = $("#selectAnoOperacion").data("kendoDropDownList");
                        anoOperacion.value(proj.get_item("anoOperacion"));
                        $("#txtObservacionesRevisionEstimados").val(proj.get_item("observacionesRevisionEstimados"));
                        $("#txtAntecedentesAdicionalesEvaluacion").val(proj.get_item("antecedentesAdicionalesEvaluacio"));
                        currentItem = parseInt(proj.get_id()); */
                        break;
                }
            }
            entregaTextoCIP();
        }

        function getDropDownValuesCodeCIPAsociado() {
            context = SP.ClientContext.get_current();
            var targetList = context.get_site().get_rootWeb().get_lists().getByTitle('CIPS por AÑO');
            var caml = "<View></View>";
            var camlQuery = new SP.CamlQuery();
            camlQuery.set_viewXml(caml);
            paramListCIP = targetList.getItems(camlQuery);
            context.load(paramListCIP);
            context.executeQueryAsync(getDropdownValuesCodeCIPAsociadoOnSuccess, OnFailure);
        }

        function getDropdownValuesCodeCIPAsociadoOnSuccess(sender, args) {
            var oEnumerator = paramListCIP.getEnumerator();
            while (oEnumerator.moveNext()) {
                var item = oEnumerator.get_current();
                data_selectCIPAsociado.add({
                    "Title": item.get_item("Title"),
                    "NCIP": item.get_item("NCIP")
                })
            }
            $("#selectCIPAsociado").data("kendoDropDownList").setDataSource(data_selectCIPAsociado);
        }

        function entregaTextoCIP() {
            textoCIP = $("#selectCIPAsociado").data("kendoDropDownList").value()
            $("#idCipAsociado").val(textoCIP);
        };

        /***************************************************/

        function entregaTextoMoneda() {
            textoMoneda = $("#selectMoneda").data("kendoDropDownList").value()
            $("#descMoneda").val(textoMoneda);
        };

        /***************************************************/

        function getDropDownValues() {
            context = SP.ClientContext.get_current();
            var targetList = context.get_site().get_rootWeb().get_lists().getByTitle('Maestro Detalle');
            var caml = "<View></View>";
            var camlQuery = new SP.CamlQuery();
            camlQuery.set_viewXml(caml);
            paramList = targetList.getItems(camlQuery);
            context.load(paramList);
            context.executeQueryAsync(getDropdownValuesOnSuccess, OnFailure);
        }


        function getDropdownValuesOnSuccess(sender, args) {
            var oEnumerator = paramList.getEnumerator();
            while (oEnumerator.moveNext()) {
                var item = oEnumerator.get_current();
                switch (item.get_item("LLave")) {
                    case "Unidad Organizacional":
                        data_selectUnidadSolicitante.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        data_selectUnidadCliente.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        data_selectUnidadPortafolio.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        data_selectUnidadDemanda.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Empresa":
                        data_selectEmpresa.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "País/Sede":
                        data_selectPaisSede.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Master Plan":
                        data_selectMasterPlan.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Categoría":
                        data_selectCategoria.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Eje":
                        data_selectEje.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Sub Eje":
                        data_selectSubEje.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Sub Categoría":
                        data_selectSubCategoria.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Programa":
                        data_selectPrograma.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Componente":
                        data_selectComponente.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Divisional":
                        data_selectDivisional.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Centro Costo":
                        data_selectCentroCosto.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Cuenta":
                        data_selectCuenta.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Función Negocio":
                        data_selectFuncionNegocio.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Tamaño":
                        data_selectTamano.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Referencia":
                        data_selectReferencia.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Naturaleza":
                        data_selectNaturaleza.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Año Portafolio":
                        data_selectAnoPortafolio.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Exige Caso Negocio":
                        data_selectExigeCasoNegocio.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Exige Estructura PEP":
                        data_selectEstructuraPEP.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Área":
                        data_selectArea.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Tipo de Costo":
                        data_selectTipoCosto.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Equipo":
                        data_selectEquipo.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "EquipoGrupo":
                        data_selectEquipoGrupo.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Periodo Operación":
                        data_selectPeriodoOperacion.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Año Operación":
                        data_selectAnoOperacion.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                    case "Objetivos Estratégicos":
                        data_ObjEstObligatorioDropDownEditor.add({
                            "Title": item.get_item("Title"),
                            "Codigo": item.get_item("Codigo")
                        });
                        break;
                }
            }

            $("#selectUnidadSolicitante").data("kendoDropDownList").setDataSource(data_selectUnidadSolicitante);

            $("#selectEmpresa").data("kendoDropDownList").setDataSource(data_selectEmpresa);
            $("#selectEmpresa").data("kendoDropDownList").select(1);

            $("#selectPaisSede").data("kendoDropDownList").setDataSource(data_selectPaisSede);
            $("#selectPaisSede").data("kendoDropDownList").select(1);

            $("#selectUnidadCliente").data("kendoDropDownList").setDataSource(data_selectUnidadCliente);

            $("#selectUnidadPortafolio").data("kendoDropDownList").setDataSource(data_selectUnidadPortafolio);

            $("#selectUnidadDemanda").data("kendoDropDownList").setDataSource(data_selectUnidadDemanda);

            $("#selectMasterPlan").data("kendoDropDownList").setDataSource(data_selectMasterPlan);
            $("#selectMasterPlan").data("kendoDropDownList").select(1);

            $("#selectCategoria").data("kendoDropDownList").setDataSource(data_selectCategoria);

            $("#selectEje").data("kendoDropDownList").setDataSource(data_selectEje);

            $("#selectSubEje").data("kendoDropDownList").setDataSource(data_selectSubEje);

            $("#selectSubCategoria").data("kendoDropDownList").setDataSource(data_selectSubCategoria);

            $("#selectPrograma").data("kendoDropDownList").setDataSource(data_selectPrograma);
            $("#selectPrograma").data("kendoDropDownList").select(1);

            $("#selectComponente").data("kendoDropDownList").setDataSource(data_selectComponente);
            $("#selectComponente").data("kendoDropDownList").select(1);

            $("#selectDivisional").data("kendoDropDownList").setDataSource(data_selectDivisional);

            $("#selectCentroCosto").data("kendoDropDownList").setDataSource(data_selectCentroCosto);

            $("#selectCuenta").data("kendoDropDownList").setDataSource(data_selectCuenta);

            $("#selectFuncionNegocio").data("kendoDropDownList").setDataSource(data_selectFuncionNegocio);

            $("#selectTamano").data("kendoDropDownList").setDataSource(data_selectTamano);

            $("#selectReferencia").data("kendoDropDownList").setDataSource(data_selectReferencia);
            $("#selectReferencia").data("kendoDropDownList").select(1);

            $("#selectNaturaleza").data("kendoDropDownList").setDataSource(data_selectNaturaleza);
            $("#selectNaturaleza").data("kendoDropDownList").select(1);

            $("#selectAnoPortafolio").data("kendoDropDownList").setDataSource(data_selectAnoPortafolio);

            $("#selectExigeCasoNegocio").data("kendoDropDownList").setDataSource(data_selectExigeCasoNegocio);
            $("#selectExigeCasoNegocio").data("kendoDropDownList").select(1);

            $("#selectEstructuraPEP").data("kendoDropDownList").setDataSource(data_selectEstructuraPEP);
            $("#selectEstructuraPEP").data("kendoDropDownList").select(1);

            $("#selectArea").data("kendoDropDownList").setDataSource(data_selectArea);

            $("#selectTipoCosto").data("kendoDropDownList").setDataSource(data_selectTipoCosto);

            $("#selectEquipo").data("kendoDropDownList").setDataSource(data_selectEquipo);

            $("#selectEquipoGrupo").data("kendoDropDownList").setDataSource(data_selectEquipoGrupo);

            $("#selectPeriodoOperacion").data("kendoDropDownList").setDataSource(data_selectPeriodoOperacion);

            $("#selectAnoOperacion").data("kendoDropDownList").setDataSource(data_selectAnoOperacion);

            getIdea();
            getDysplayOrEditForm();
            _spBodyOnLoadFunctionNames.push("HideRibbon");
        }

        function getDysplayOrEditForm() {
            if (GetUrlKeyValue("ContentTypeId") == "") {
                console.log("NULL");
                console.log(GetUrlKeyValue("ContentTypeId"));
            } else {
                console.log("No NULL");
                console.log(GetUrlKeyValue("ContentTypeId"));
                setOnlyRead();
            }
        }

        function setOnlyRead() {}

        function HideRibbon() {
            $("#s4-ribbonrow").hide();
            var newHeight = $(document).height();
            if ($.browser.msie) { newHeight = newHeight - 3; }

            $("#s4-workspace").height(newHeight);

        }

        function cancelarFormulario() {
            $(location).prop('href', "/PWA_CLOUDEPM/Lists/Idea/AllItems.aspx");

        }

        function guardarFormulario() {
            currList = context.get_web().get_lists().getByTitle("Solicitud de Asignación Preupuestaria para la Inversión/Gasto");
            if (currentItem == null) {
                var itemCreateInfo = new SP.ListItemCreationInformation();
                oListItem = currList.addItem(itemCreateInfo);
            } else {
                oListItem = currList.getItemById(currentItem);
            }

            /*									TAB SOLICITUD									*/

            /*									1.Identificación								*/

            //IP
            var IPProyecto = $("#CodigoIP").val();
            oListItem.set_item("CodigoIP", IPProyecto);

            //Nombre
            var nombreProyecto = $("#NombreIniciativa").val();
            oListItem.set_item("NombreIniciativa", nombreProyecto);

            //Fecha de Solicitud
            var fechaSolicitud = $("#fechaSolicitud").data("kendoDatePicker");
            oListItem.set_item("fechaSolicitud", fechaSolicitud.value());

            //Gestor de Demanda
            oListItem.set_item("GestorDeDemanda", usuarioppGestorDemanda);
            var ppGestorDemanda = SPClientPeoplePicker.SPClientPeoplePickerDict.ppGestorDemanda_TopSpan;
            var usersppGestorDemanda = ppGestorDemanda.GetAllUserInfo();
            var userppGestorDemanda = usersppGestorDemanda[0];
            var usuarioppGestorDemanda = context.get_web().ensureUser(userppGestorDemanda.DisplayText);
            context.load(usuarioppGestorDemanda);

            //Fecha de Modificación
            var fechaModificacion = $("#fechaModificacion").data("kendoDatePicker");
            oListItem.set_item("fechaModificacion", fechaModificacion.value());

            //Jefe de Proyectos
            oListItem.set_item("JefeDeProyecto", usuarioppJefeProyecto);
            var ppGestorDemanda = SPClientPeoplePicker.SPClientPeoplePickerDict.ppGestorDemanda_TopSpan;
            var usersppJefeProyecto = ppGestorDemanda.GetAllUserInfo();
            var userppJefeProyecto = usersppJefeProyecto[0];
            var usuarioppJefeProyecto = context.get_web().ensureUser(userppJefeProyecto.DisplayText);
            context.load(usuarioppJefeProyecto);

            //Unidad Solicitante
            var unidadSolicitante = $("#selectUnidadSolicitante").val();
            oListItem.set_item("unidadSolicitante", unidadSolicitante);

            //Unidad Ejecutante
            var unidadEjecutante = $("#selectUnidadEjecutante").val();
            oListItem.set_item("unidadEjecutante", unidadEjecutante);


            /*						2.Solicitud de Autorización para Licitar						*/

            //Tipo de Licitación
            oListItem.set_item("TipoLicitacion", $('input:radio[name=optTipoLicitacion]:checked').val());

            //Nombre de Contrato
            var nombreContrato = $("#NombreContrato").val();
            oListItem.set_item("NombreContrato", nombreContrato);

            //Presupuesto Total Estimado (con IVA)
            var presupestoTotalIva = $("#PresupestoTotalIva").val();
            oListItem.set_item("PresupestoTotalIva", presupestoTotalIva);

            //Fuente
            oListItem.set_item("Fuente", $('input:radio[name=optFuente]:checked').val());

            //Moneda
            var moneda = $("#selectMoneda").data("kendoDropDownList");
            oListItem.set_item("Moneda", moneda.value());

            //Moneda Descripción

            //Comentarios Solicitud de Autorización para Licitar
            oListItem.set_item("ComentariosSAL", $("#txtComentariosSAL").val());

            /*						3. Solicitud de Asignación Presupuestaria						*/

            //Modalidad
            oListItem.set_item("Modalidad", $('input:radio[name=optModalidad]:checked').val());

            //N° CIP (Capex)
            var cipAsociado = $("#selectCIPAsociado").data("kendoDropDownList");
            oListItem.set_item("cipAsociado", cipAsociado.text());

            //N° Registro (Opex)
            var registro = $("#selectnumRegistro").data("kendoDropDownList");
            oListItem.set_item("numRegistro", registro.text());

            //IP Proyecto Swap

            //Nombre Proyecto Swap

            //Justificación y Observaciones Swap
            oListItem.set_item("JustyObs", $("#txtJustyObs").val());

            //Presupuesto Autorizado
            var presuAutorizado = $("#presupuestoAutorizado").val();
            oListItem.set_item("presupuestoAutorizado", presuAutorizado);

            //Comprometido Autorizado
            var comproAutorizado = $("#comprometidoAutorizado").val();
            oListItem.set_item("comprometidoAutorizado", comproAutorizado);

            //Disponible Autorizado

            //Presupuesto Swap
            var pptoSwap = $("#presupuestoSwap").val();
            oListItem.set_item("presupuestoSwap", pptoSwap);

            //Comprometido Swap
            var comproSwap = $("#comprometidoSwap").val();
            oListItem.set_item("comprometidoSwap", comproSwap);

            //Disponible Swap

            //Presupuesto Total

            //Comprometido Total		

            //Disponible Total

            /*						4. Participantes Invitados a la Licitación						*/

            //Empresa
            var empresa = $("#selectEmpresa").data("kendoDropDownList");
            oListItem.set_item("empresa", empresa.value());

            //CLP$ Estimado
            var clpEstimado = $("#clpestimado").val();
            oListItem.set_item("clpestimado", clpEstimado);

            // Total CLP$ Estimado

            //Checkbox "Lista Para Envío"
            oListItem.set_item("Listo", $("#listoParaEnvio").prop("checked"));


            /*									TAB JUSTIFICACIÓN									*/

            /*					5. Solicitud de Autorización para Adjudicar Contrato(s)				*/

            //Presupuesto Autorizado a Adjudicar (copia "Disponible Total" tab Solicitud)

            //Fecha Adjudicación

            //Moneda (copia tab "Solicitud")

            //Fecha de Conversión

            //Valor Conversión

            /*								6. Participantes Licitación								*/

            //Empresa 

            //CLP$ Estimado (Copia tab Solicitud)

            //CLP$ Adjudicado

            //Tipo de Contrato

            //Modalidad

            /*								7. Aprobación de Comité									*/

            //N° Resolución

            //Fecha Sansión

            //Instancia Aprobación

            //Estado de Aprobación

            //Observaciones sobre la Resolución

            /*										TAB FLUJOS										*/

            /*								8. Flujos de Pago Programados							*/

            //Empresa

            //Enero

            //Febrero

            //Marzo

            //Abril

            //Mayo

            //Junio

            //Julio

            //Agosto

            //Septiembre

            //Octubre

            //Noviembre

            //Diciembre

            //Total

            //Enero Total

            //Febrero Total

            //Marzo Total

            //Abril Total

            //Mayo Total

            //Junio Total

            //Julio Total

            //Agosto Total

            //Septiembre Total

            //Octubre Total

            //Noviembre Total

            //Diciembre Total

            //Total X Total

            //Checkbox "Lista Para Envío"

            /*									TAB FORMALIZACIÓN									*/

            /* 				9. Registro de las Ordenes de Compra y Contratos Asociados	 			*/

            //Empresa

            //N° de Solicitud de Compra

            //F. Solcitud de Compra

            //N° OC Compra

            //Fecha OC de Compra

            //N° Solicitud del Contrato

            //F. Firma del Contrato

            //Resp. Contrato

            /* 			10. Autorización de las Ordenes de Compra y Contratos Asociados 			*/

            //Empresa

            //Instancia de la OC

            //F. Solicitud de la OC

            //F. Autorización de la OC

            //Autorizador de la OC

            //Instancia del Contrato

            //F. Solicitud del Contrato

            //F. Firma del Contrato

            //Autorizador del Contrato

            //Checkbox "Lista Para Envío"


            var paisSede = $("#selectPaisSede").data("kendoDropDownList");
            oListItem.set_item("paisSede", paisSede.value());

            var ppCliente = SPClientPeoplePicker.SPClientPeoplePickerDict.ppCliente_TopSpan;
            var usersppCliente = ppCliente.GetAllUserInfo();
            var userppCliente = usersppCliente[0];
            var usuarioppCliente = context.get_web().ensureUser(userppCliente.DisplayText);
            context.load(usuarioppCliente);
            oListItem.set_item("Cliente", usuarioppCliente);

            var ppGestorDePortafolio = SPClientPeoplePicker.SPClientPeoplePickerDict.ppGestorDePortafolio_TopSpan;
            var usersppGestorDePortafolio = ppGestorDePortafolio.GetAllUserInfo();
            var userppGestorDePortafolio = usersppGestorDePortafolio[0];
            var usuarioppGestorDePortafolio = context.get_web().ensureUser(userppGestorDePortafolio.DisplayText);
            context.load(usuarioppGestorDePortafolio);
            oListItem.set_item("GestorDePortafolio", usuarioppGestorDePortafolio);

            var ppGDemandaEval = SPClientPeoplePicker.SPClientPeoplePickerDict.ppGDemandaEval_TopSpan;
            var usersppGDemandaEval = ppGDemandaEval.GetAllUserInfo();
            var userppGDemandaEval = usersppGDemandaEval[0];
            var usuarioppGDemandaEval = context.get_web().ensureUser(userppGDemandaEval.DisplayText);
            context.load(usuarioppGDemandaEval);
            oListItem.set_item("Evaluador", usuarioppGDemandaEval);

            var unidadCliente = $("#selectUnidadCliente").data("kendoDropDownList");
            oListItem.set_item("unidadCliente", unidadCliente.value());

            var unidadPortafolio = $("#selectUnidadPortafolio").data("kendoDropDownList");
            oListItem.set_item("unidadPortafolio", unidadPortafolio.value());

            var unidadDemanda = $("#selectUnidadDemanda").data("kendoDropDownList");
            oListItem.set_item("unidadDemanda", unidadDemanda.value());

            var seleccionaMP = $("#selectMasterPlan").data("kendoDropDownList");
            oListItem.set_item("SeleccionaMP", seleccionaMP.value());



            oListItem.set_item("proposito", $("#txtproposito").val());

            oListItem.set_item("declaracionProblemaUOportunidad", $("#txtDeclaracion").val());

            oListItem.set_item("consecuaciasNoRealizarIniciativa", $("#txtConcecuancias").val());

            oListItem.set_item("Prioridad", $('input:radio[name=optPrioridad]:checked').val());

            oListItem.set_item("valor", $('input:radio[name=optValor]:checked').val());

            oListItem.set_item("urgencia", $('input:radio[name=optUrgencia]:checked').val());

            oListItem.set_item("objetivosEspecificos", JSON.stringify(data_gridObjEsp));

            oListItem.set_item("objetivosEstrategicos", JSON.stringify(data_gridAliEst));

            oListItem.set_item("BeneficiosEsperados", JSON.stringify(data_gridBenEsp));

            oListItem.set_item("impactoEnUsuarios", JSON.stringify(data_gridImpUsu));

            var categoria = $("#selectCategoria").data("kendoDropDownList");
            oListItem.set_item("categoria", categoria.value());

            var eje = $("#selectEje").data("kendoDropDownList");
            oListItem.set_item("eje", eje.value());

            var subEje = $("#selectSubEje").data("kendoDropDownList");
            oListItem.set_item("subEje", subEje.value());

            var subCategoria = $("#selectSubCategoria").data("kendoDropDownList");
            oListItem.set_item("subCategoria", subCategoria.value());

            var programa = $("#selectPrograma").data("kendoDropDownList");
            oListItem.set_item("programa", programa.value());

            var componente = $("#selectComponente").data("kendoDropDownList");
            oListItem.set_item("componente", componente.value());

            var divisional = $("#selectDivisional").data("kendoDropDownList");
            oListItem.set_item("divisional", divisional.value());

            var centroCosto = $("#selectCentroCosto").data("kendoDropDownList");
            oListItem.set_item("centroCosto", centroCosto.value());

            var cuenta = $("#selectCuenta").data("kendoDropDownList");
            oListItem.set_item("cuenta", cuenta.value());

            var funcionNegocio = $("#selectFuncionNegocio").data("kendoDropDownList");
            oListItem.set_item("funcionNegocio", funcionNegocio.value());

            oListItem.set_item("tipoProyecto", $('input:radio[name=tipoProyecto]:checked').val());

            oListItem.set_item("claseProyecto", $('input:radio[name=claseProyecto]:checked').val());

            var tamano = $("#selectTamano").data("kendoDropDownList");
            oListItem.set_item("tamano", tamano.value());

            oListItem.set_item("origen", $('input:radio[name=origen]:checked').val());

            var referencia = $("#selectReferencia").data("kendoDropDownList");
            oListItem.set_item("referencia", referencia.value());

            oListItem.set_item("complejidad", $('input:radio[name=complejidad]:checked').val());

            var naturaleza = $("#selectNaturaleza").data("kendoDropDownList");
            oListItem.set_item("naturaleza", naturaleza.value());

            var anoPortafolio = $("#selectAnoPortafolio").data("kendoDropDownList");
            oListItem.set_item("anoPortafolio", anoPortafolio.value());

            var exigeCasoNegocio = $("#selectExigeCasoNegocio").data("kendoDropDownList");
            oListItem.set_item("ExigeCasoNegocio", exigeCasoNegocio.value());

            var estructuraPEP = $("#selectEstructuraPEP").data("kendoDropDownList");
            oListItem.set_item("ExigeEstructuraPEP", estructuraPEP.value());

            var area = $("#selectArea").data("kendoDropDownList");
            oListItem.set_item("area", area.value());

            var tipoCosto = $("#selectTipoCosto").data("kendoDropDownList");
            oListItem.set_item("tipoCosto", tipoCosto.value());

            var equipo = $("#selectEquipo").data("kendoDropDownList");
            oListItem.set_item("equipo", equipo.value());

            var equipoGrupo = $("#selectEquipoGrupo").data("kendoDropDownList");
            oListItem.set_item("equipoGrupo", equipoGrupo.value());

            var unidadUsuaria = $("#selectUnidadUsuaria").data("kendoDropDownList");
            oListItem.set_item("unidadUsuaria", unidadUsuaria.value());

            var fechaEvaluacion = $("#fechaEvaluacion").data("kendoDatePicker");
            oListItem.set_item("fechaEvaluacion", fechaEvaluacion.value());

            var costoInvPlanificado = $("#costoInvPlanificado").val();
            oListItem.set_item("costoInvPlanificado", costoInvPlanificado);

            var costoInvRevisado = $("#costoInvRevisado").val();
            oListItem.set_item("costoInvRevisado", costoInvRevisado);

            var costoOpPlanificado = $("#costoOpPlanificado").val();
            oListItem.set_item("costoOpPlanificado", costoOpPlanificado);

            var costoOpRevisado = $("#costoOpRevisado").val();
            oListItem.set_item("costoOpRevisado", costoOpRevisado);

            var plazoEstimado = $("#plazoEstimado").val();
            oListItem.set_item("plazoEstimado", plazoEstimado);

            var unidadUsuaria = $("#selectUnidadUsuaria").data("kendoDropDownList");
            oListItem.set_item("unidadUsuaria", unidadUsuaria.value());

            var periodoOperacion = $("#selectPeriodoOperacion").data("kendoDropDownList");
            oListItem.set_item("periodoOperacion", periodoOperacion.value());

            var anoOperacion = $("#selectAnoOperacion").data("kendoDropDownList");
            oListItem.set_item("anoOperacion", anoOperacion.value());

            oListItem.set_item("observacionesRevisionEstimados", $("#txtObservacionesRevisionEstimados").val());

            oListItem.set_item("antecedentesAdicionalesEvaluacio", $("#txtAntecedentesAdicionalesEvaluacion").val());

            oListItem.update();
            context.load(oListItem);
            context.executeQueryAsync(guardarIdeaOnSucceeded, OnFailure);
        }

        function guardarIdeaOnSucceeded(sender, request) {
            kendo.ui.progress($("#main-container"), false);
            var newId = oListItem.get_id();
            $("#dialog").kendoDialog({
                width: "400px",
                title: "Cloud EPM",
                closable: true,
                modal: true,
                content: "<p>La idea ha sido guardado correctamente.<p>",
                actions: [{ text: 'OK' }]
            });
        }

        function OnFailure(sender, args) {
            kendo.ui.progress($("#main-container"), false);
            kendo.alert('Error:  ' + args.get_message());
        }

        function ObjEstObligatorioDropDownEditor(container, options) {
            var campoOpciones = $('<input required name="' + options.field + '"/>');
            campoOpciones.appendTo(container).kendoDropDownList({
                optionLabel: "Seleccione...",
                dataTextField: "Title",
                dataValueField: "Title",
                autoWidth: true
            });
            campoOpciones.data("kendoDropDownList").setDataSource(data_ObjEstObligatorioDropDownEditor);
        }
        var data_ObjEstObligatorioDropDownEditor = new kendo.data.DataSource({
            schema: {
                model: {
                    id: "Código",
                    fields: {
                        Codigo: { type: "string" },
                        Title: { type: "string" }
                    }
                }
            }

        })

        function setPeoplePickerDefaultValuePatrocinador(userName) {
            userSearchPatrocinador = context.get_web().ensureUser(userName);
            context.load(userSearchPatrocinador);
            context.executeQueryAsync(getUserToSetPatrocinador, OnFailure);

        }

        function getUserToSetPatrocinador(sender, request) {
            var users = new Array(1);
            var currentUser = new Object();
            currentUser.AutoFillDisplayText = userSearchPatrocinador.get_title();
            currentUser.AutoFillKey = userSearchPatrocinador.get_loginName();
            currentUser.Description = userSearchPatrocinador.get_email();
            currentUser.DisplayText = userSearchPatrocinador.get_title();
            currentUser.EntityType = "User";
            currentUser.IsResolved = true;
            currentUser.Key = userSearchPatrocinador.get_loginName();
            currentUser.Resolved = true;
            users[0] = currentUser;
            initializePeoplePicker('ppPatrocinador', users);
        }

        function setPeoplePickerDefaultValueCliente(userName) {
            userSearchCliente = context.get_web().ensureUser(userName);
            context.load(userSearchCliente);
            context.executeQueryAsync(getUserToSetCliente, OnFailure);

        }

        function getUserToSetCliente(sender, request) {
            var users = new Array(1);
            var currentUser = new Object();
            currentUser.AutoFillDisplayText = userSearchCliente.get_title();
            currentUser.AutoFillKey = userSearchCliente.get_loginName();
            currentUser.Description = userSearchCliente.get_email();
            currentUser.DisplayText = userSearchCliente.get_title();
            currentUser.EntityType = "User";
            currentUser.IsResolved = true;
            currentUser.Key = userSearchCliente.get_loginName();
            currentUser.Resolved = true;
            users[0] = currentUser;
            initializePeoplePicker('ppCliente', users);
        }

        function setPeoplePickerDefaultValueGPortafolio(userName) {
            userSearchGPortafolio = context.get_web().ensureUser(userName);
            context.load(userSearchGPortafolio);
            context.executeQueryAsync(getUserToSetGPortafolio, OnFailure);

        }

        function getUserToSetGPortafolio(sender, request) {
            var users = new Array(1);
            var currentUser = new Object();
            currentUser.AutoFillDisplayText = userSearchGPortafolio.get_title();
            currentUser.AutoFillKey = userSearchGPortafolio.get_loginName();
            currentUser.Description = userSearchGPortafolio.get_email();
            currentUser.DisplayText = userSearchGPortafolio.get_title();
            currentUser.EntityType = "User";
            currentUser.IsResolved = true;
            currentUser.Key = userSearchGPortafolio.get_loginName();
            currentUser.Resolved = true;
            users[0] = currentUser;
            initializePeoplePicker('ppGestorDePortafolio', users);
        }

        function setPeoplePickerDefaultValueGDemanda(userName) {
            userSearchGDemanda = context.get_web().ensureUser(userName);
            context.load(userSearchGDemanda);
            context.executeQueryAsync(getUserToSetGDemanda, OnFailure);

        }

        function getUserToSetGDemanda(sender, request) {
            var users = new Array(1);
            var currentUser = new Object();
            currentUser.AutoFillDisplayText = userSearchGDemanda.get_title();
            currentUser.AutoFillKey = userSearchGDemanda.get_loginName();
            currentUser.Description = userSearchGDemanda.get_email();
            currentUser.DisplayText = userSearchGDemanda.get_title();
            currentUser.EntityType = "User";
            currentUser.IsResolved = true;
            currentUser.Key = userSearchGDemanda.get_loginName();
            currentUser.Resolved = true;
            users[0] = currentUser;
            initializePeoplePicker('ppGestorDemanda', users);
        }

        function setPeoplePickerDefaultValueEvaluador(userName) {
            userSearchEvaluador = context.get_web().ensureUser(userName);
            context.load(userSearchEvaluador);
            context.executeQueryAsync(getUserToSetEvaluador, OnFailure);

        }

        function getUserToSetEvaluador(sender, request) {
            var users = new Array(1);
            var currentUser = new Object();
            currentUser.AutoFillDisplayText = userSearchEvaluador.get_title();
            currentUser.AutoFillKey = userSearchEvaluador.get_loginName();
            currentUser.Description = userSearchEvaluador.get_email();
            currentUser.DisplayText = userSearchEvaluador.get_title();
            currentUser.EntityType = "User";
            currentUser.IsResolved = true;
            currentUser.Key = userSearchEvaluador.get_loginName();
            currentUser.Resolved = true;
            users[0] = currentUser;
            initializePeoplePicker('ppGDemandaEval', users);
        }

        function initializePeoplePicker(peoplePickerElementId, defaultSet) {

            var schema = {};
            schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
            schema['SearchPrincipalSource'] = 15;
            schema['ResolvePrincipalSource'] = 15;
            schema['AllowMultipleValues'] = false;
            schema['MaximumEntitySuggestions'] = 50;
            schema['Width'] = '280px';

            SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, defaultSet, schema);
            //			$("#peoplePickerDiv_TopSpan").removeClass("sp-peoplepicker-topLevel").addClass("form-control");
            //			$("#ppGestorDePortafolio_TopSpan").removeClass("sp-peoplepicker-topLevel").addClass("form-control");

        }




        function getUserInfo() {
            var ppPatrocinador = SPClientPeoplePicker.SPClientPeoplePickerDict.ppPatrocinador_TopSpan;
            var ppCliente = SPClientPeoplePicker.SPClientPeoplePickerDict.ppCliente_TopSpan;
            var ppGestorDePortafolio = SPClientPeoplePicker.SPClientPeoplePickerDict.ppGestorDePortafolio_TopSpan;
            var ppGestorDemanda = SPClientPeoplePicker.SPClientPeoplePickerDict.ppGestorDemanda_TopSpan;
            var ppGDemandaEval = SPClientPeoplePicker.SPClientPeoplePickerDict.ppGDemandaEval_TopSpan;




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
            $('#userId').html(user.get_id());
        }

        function getUserIdOnFail(sender, args) {
            alert('Query failed. Error: ' + args.get_message());
        }

        var publics = {
            SetControls: setControls,
            GuardarFormulario: guardarFormulario,
            CancelarFormulario: cancelarFormulario,
            GetunidadUsuariaValue: getunidadUsuariaValue,
            Set_selectExigeCasoNegocio: set_selectExigeCasoNegocio,
            Set_selectselectTipoCosto: set_selectselectTipoCosto,
            EntregaTextoCIP: entregaTextoCIP,
        };

        return publics;

    }
    // #End OsirisApp.Idea.Work