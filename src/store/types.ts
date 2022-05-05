export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IAgreement {
    id: string;
    agency_id: string;
    agency_manager_id: string;
    land_lord_id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    agency: IAgency;
    agency_manager: IAgencyManager;
    land_lord: ILandLord;
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
    type_demo: number;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    emergency_contacts: IEmergencyContact[];
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
    avatar_id: string;
    agency_id: string;
    is_completed: number;
    sync_for_agency: number;
    is_primary_manager: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    agency_location_id: number;
    avatar: IAvatar;
    full_name: string;
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

export interface ILandLord {
    id: string;
    lease_id: string;
    property_id: string;
    full_name: string;
    notice_address: string;
    phone: string;
    email: string;
    use_agency_address: number;
    use_agent_phone: number;
    electronic_notice: number;
    given_by?: any;
    facsimile?: any;
    created_at: string;
    updated_at: string;
    property: IProperty;
}