import { IAgreement } from "../store/types";

export const mockAgreement: IAgreement = {
    "id": "43d4dadc-cf1f-48ea-ae98-901f3ff58998",
    "agency_id": "cf76b9d6-c7a1-40e6-8176-ac13e2b1915d",
    "agency_manager_id": "0f94cb45-9f37-49a8-9008-29953fe7242d",
    "land_lord_id": "0f94cb45-9f37-49a8-9008-29953fe7242d",
    "name": "Test Agreement name",
    "status": "1",
    "created_at": "2022-05-05 07:56:23",
    "updated_at": "2022-05-05 07:58:18",
    "deleted_at": '',
    "agency": {
        "id": "cf76b9d6-c7a1-40e6-8176-ac13e2b1915d",
        "name": "1 Agency",
        "alias": "1-agency",
        "reference_id": "19000",
        "abn": 28228491423,
        "acn": 361650624,
        "type": "default",
        "website": "http://www.mckenzie.com/autem-dicta-quibusdam-quia-sed-delectus-natus-non.html",
        "logo_id": "c0288aa4-8d85-11ec-b685-0242ac140003",
        "address": "NY str 100",
        "email": "usauer@greenfelder.com",
        "phone_number": "+4-370-371-91-37",
        "country": "Luxembourg",
        "legal_business_name": "Itzel Schultz",
        "additional_address": "Ny",
        "city": "Aufderharside",
        "state": "Haskelltown",
        "postcode": "2790",
        "pricing": "P100",
        "ps_activated_at": "2021-07-15 11:17:40",
        "type_demo": 1,
        "created_at": "2021-07-15 11:17:40",
        "updated_at": "2022-04-20 16:40:13",
        "deleted_at": null,
        "emergency_contacts": [
            {
                "id": "36bb5c62-379e-4a6c-8561-e3bc75e60ccd",
                "agency_id": "cf76b9d6-c7a1-40e6-8176-ac13e2b1915d",
                "type": "locksmith",
                "company_name": "VIC_company",
                "contact_name": "VIC_contact",
                "phone": "+1.567.855.1264",
                "email": "vic.test@email.com",
                "created_at": "2021-09-06 15:34:03",
                "updated_at": "2021-09-06 15:34:03",
                "deleted_at": null,
                "agency_location_id": 711
            },
            {
                "id": "94268323-9141-4447-a3e4-6f7af70e2240",
                "agency_id": "cf76b9d6-c7a1-40e6-8176-ac13e2b1915d",
                "type": "other",
                "company_name": "NSW_company",
                "contact_name": "NSW_contact",
                "phone": "751.744.5551 x364",
                "email": "nsw.test@email.com",
                "created_at": "2021-09-06 15:33:51",
                "updated_at": "2021-09-06 15:33:51",
                "deleted_at": null,
                "agency_location_id": 876
            }
        ]
    },
    "agency_manager": {
        "id": "0f94cb45-9f37-49a8-9008-29953fe7242d",
        "first_name": "Yurii",
        "last_name": "Lobas",
        "email": "test.qa.faker@gmail.com",
        "title": "Test",
        "phone_number": "11111111111111111",
        "public_phone_number": null,
        "address": null,
        "avatar_id": "55cb538c-0f07-11ec-a786-0242ac1b0012",
        "agency_id": "cf76b9d6-c7a1-40e6-8176-ac13e2b1915d",
        "is_completed": 1,
        "sync_for_agency": 1,
        "is_primary_manager": true,
        "created_at": "2021-07-15 11:30:17",
        "updated_at": "2022-04-11 06:47:21",
        "deleted_at": null,
        "agency_location_id": 876,
        "avatar": {
            "id": "55cb538c-0f07-11ec-a786-0242ac1b0012",
            "name": "lIopTHZi3JPLh0GSzfuJ15BwPUYCiKgx.png",
            "title": "lIopTHZi3JPLh0GSzfuJ15BwPUYCiKgx",
            "type": "image",
            "size": 500828,
            "path": "/uploads/images/20210906/lIopTHZi3JPLh0GSzfuJ15BwPUYCiKgx/lIopTHZi3JPLh0GSzfuJ15BwPUYCiKgx.png",
            "ext": "png",
            "mime": "image/png",
            "glide": "https://storage.dev.propertyspace.com/files/render/55cb538c-0f07-11ec-a786-0242ac1b0012",
            "thumbnail": "https://storage.dev.propertyspace.com/files/render/55cb538c-0f07-11ec-a786-0242ac1b0012",
            "full_url": "https://s3propertyspace-dev.s3.eu-central-1.amazonaws.com/uploads/images/20210906/lIopTHZi3JPLh0GSzfuJ15BwPUYCiKgx/lIopTHZi3JPLh0GSzfuJ15BwPUYCiKgx.png",
            "created_at": "2021-09-06T11:41:12.000000Z",
            "updated_at": "2021-09-06T11:41:12.000000Z"
        },
        "full_name": "Yurii Lobas"
    },
    "land_lord": {
        "id": "79e39a62-2fae-4ac5-92db-a326bcd4854b",
        "lease_id": "43d4dadc-cf1f-48ea-ae98-901f3ff58998",
        "property_id": "154c6a92-1b9e-48cd-aa1a-2fed0f4c3771",
        "full_name": "Jane Dane",
        "notice_address": "Some str. Sydney",
        "phone": "+123456789",
        "email": "q@q.com",
        "use_agency_address": 1,
        "use_agent_phone": 0,
        "electronic_notice": 1,
        "given_by": null,
        "facsimile": null,
        "created_at": "2022-05-05 07:57:13",
        "updated_at": "2022-05-05 07:57:13",
        "property": {
            "id": "154c6a92-1b9e-48cd-aa1a-2fed0f4c3771",
            "address": "42, Newport Street",
            "additional_address": null,
            "state": "NSW",
            "is_synced": 0,
            "city": "East Ballina",
            "country": null,
            "post_code": "2478",
            "property_type": "Apartment",
            "coordinates": [153.5811816, -28.8633457],
            "is_fulfilled": 1,
            "bedrooms_count": 0,
            "bathrooms_count": 0,
            "unit": "Unit2425",
            "created_at": "2021-12-06 06:43:06",
            "updated_at": "2021-12-06 06:43:06",
            "deleted_at": null,
            "agency_id": "cf76b9d6-c7a1-40e6-8176-ac13e2b1915d",
            "formatted_address": "Unit2425/Newport Street, East Ballina, NSW, 2478"
        },
    },
}