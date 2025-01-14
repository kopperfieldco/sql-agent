const context: string[] = [
	"Project information is stored in 'core_project', each row represents one residential EV charger installation project",
	"Each project is connected to a request via 'request_id' field, pointing to one row at 'core_request'.",
	"The request spec detail is stored in `core_evchargerrequestdetails`, each referred to by 'detail_id' field in a request.",
	"The value of field 'selected_proposal_id' in 'core_project' indicates whether the project has converted and received payment.",
	"Each project can have multiple tags, tags are stored in 'core_tag'. The relationship between project and tags are stored in 'core_project_tags'. Projects tagged with 'internal' are internal test projects that should not be included in any queries.",
	"The service location of each project is stored in core_property table, which is connected to each project via 'property_id' field in 'core_project'.",
];

export default context;
