export interface IAgreement {
    id: string;
    status: string;
    created_at: string;
    agency: IAgency;
    manager: IAgencyManager;
    landlord: ILandLord;
    license: ILicensee;
    property: IProperty;
    property_info: IPropertyInfo;
    inspection: IInspection;
}

export interface IEmergencyContact {
    id: string;
    agency_id: string;
    type: string;
    company_name: string;
    contact_name: string;
    phone: string;
    email: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    agency_location_id: number;
}

export interface IAgency {
    id: string;
    name: string;
    alias: string;
    reference_id: string;
    abn: number;
    acn: number;
    type: string;
    website: string;
    logo_id: string;
    address: string;
    email: string;
    phone_number: string;
    country: string;
    legal_business_name: string;
    additional_address: string;
    city: string;
    state: string;
    postcode: string;
    pricing: string;
    ps_activated_at: string;
    // type_demo: number;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    // emergency_contacts: IEmergencyContact[];
}

export interface IAvatar {
    id: string;
    name: string;
    title: string;
    type: string;
    size: number;
    path: string;
    ext: string;
    mime: string;
    glide: string;
    thumbnail: string;
    full_url: string;
    created_at: string;
    updated_at: string;
}

export interface IAgencyManager {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    title: string;
    phone_number: string;
    public_phone_number?: any;
    address?: any;
    // avatar_id: string;
    // agency_id: string;
    // is_completed: number;
    // sync_for_agency: number;
    // is_primary_manager: boolean;
    // created_at: string;
    // updated_at: string;
    // deleted_at?: any;
    // agency_location_id: number;
    // avatar: IAvatar;
    full_name: string;
}

export interface IInspection {
    id: number;
    agreement_id: string;
    description_of_property: string;
    condition_of_exterior: string;
    condition_of_interior: string;
    fitting: string;
    smoke_alarms: string;
    impovements_with_property: string;
    work_still_to_be_completed: string;
    preparation_of_report: string;
    created_at: string;
    updated_at: string;
}

export interface ILandLord {
    id: string;
    acn_abn: number,
    gst: number,
    full_name: string;
    address: string;
    phone: string;
    mobile: string;
    business_phone: string;
    email: string;
    emergency_details: string;
    verification_photo: IAvatar | null;// todo: add on beckend
    created_at: string;

    // lease_id: string;
    // property_id: string;
    // notice_address: string;
    // verification_photo: IAvatar | null;
    // use_agency_address: number;
    // use_agent_phone: number;
    // electronic_notice: number;
    // given_by?: any;
    // facsimile?: any;
    // updated_at: string;
    // property: IProperty;
}

export interface ILicensee {
    id: string;
    agreement_id: string;
    acn_abn: number;
    gst: number;
    license_number: number;
    name: string;
    business_name: string;
    address: string;
    phone: string;
    mobile: string;
    business_phone: string;
    fax: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface IProperty {
    id: string;
    address: string;
    additional_address?: any;
    state: string;
    is_synced: number;
    city: string;
    country?: any;
    post_code: string;
    property_type: string;
    coordinates: number[];
    is_fulfilled: number;
    bedrooms_count: number;
    bathrooms_count: number;
    unit: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    agency_id: string;
    formatted_address: string;
}

export interface IPropertyInfo {
    id: string;
    agreement_id: string;
    commencement_date: string;
    termination_days: number;
    initial_leasing: string;
    first_lease: string;
    resident_preparation_fee: string;
    administration_fee_payable_monthly: string;
    lease_re_letting_fee: string;
    management_fee_equal_to_percents: number;
    advertising_per_leasing: string;
    government_charged: string;
    office_expenses: string;
    inspection_fee: string;
    negotiating_rent_variation: string;
    appearing_at_court?: any;
    appearing_before_panel: string;
    arranging_maintenance: string;
    service_of_notice: string;
    applying_for_tribunal: string;
    preparation_of_stay: string;
    manner_of_advertising: string;
    signboard?: any;
    authorised_maintenance_anyone_item: string;
    fixed_term_no_less_weeks: number;
    fixed_term_no_more_weeks: number;
    rent_amount: string;
    frequency: string;
    premises_from: string;
    council_rates: number;
    water_charges: number;
    land_tax?: any;
    insurance_premiums_policy_no?: any;
    insurance_premiums_company: number;
    strata_title_levies: number;
    strata_agent: string;
    strata_address: string;
    strata_phone: string;
    strata_email: string;
    strata_fax: string;
    strata_other?: any;
    cheque_to_accompany_statement: string;
    pay_the_credit: string;
    bank: string;
    branch_address: string;
    account_no: string;
    source_of_rebate: string;
    estimated_of_discounts: string;
    created_at: string;
    updated_at: string;
    obtain_references: number;
    select_tenants: number;
    sign_tenancy_agreement_principal: number;
    submit_tenants_principal: number;
    additional_field_code: string;
}


export enum ErrorStatus {
    'Bad Request' = 400,
    'Forbidden' = 403,
    'Not Found' = 404,
    'Internal Server Error' = 500
}

export interface IImageData {
    landlordId: string;
    image: string | Blob;
}
