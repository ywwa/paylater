export interface paths {
    "/v1/stores/{storeId}/affiliate-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AffiliateLinks_GetAffiliateLinks"];
        put?: never;
        post: operations["AffiliateLinks_CreateAffiliateLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AffiliateLinks_GetAffiliateLink"];
        put?: never;
        post?: never;
        delete: operations["AffiliateLinks_DeleteAffiliateLink"];
        options?: never;
        head?: never;
        patch: operations["AffiliateLinks_UpdateAffiliateLink"];
        trace?: never;
    };
    "/v1/stores/{storeId}/bans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Bans_GetBans"];
        put?: never;
        post: operations["Bans_CreateBan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/bans/{banId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Bans_GetBan"];
        put?: never;
        post?: never;
        delete: operations["Bans_DeleteBan"];
        options?: never;
        head?: never;
        patch: operations["Bans_UpdateBan"];
        trace?: never;
    };
    "/v1/stores/{storeId}/bans/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Bans_CheckForBanByIdentities"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/checkouts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a checkout session
         * @description Creates a checkout session from a secure server using an API Key.
         *     If you have a Customer token, see the Storefront API Create Checkout endpoint.
         */
        post: operations["StoreCheckouts_CreateCheckoutSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/coupons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetches all coupons for a store id */
        get: operations["StoreCoupons_GetCouponsForStore"];
        put?: never;
        post: operations["StoreCoupons_CreateCouponForStore"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/coupons/{couponId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a coupon by ID */
        get: operations["StoreCoupons_GetCouponByIdForStore"];
        put?: never;
        post?: never;
        /** Deletes a coupon */
        delete: operations["StoreCoupons_DeleteCouponForStore"];
        options?: never;
        head?: never;
        /** Performs a Delta Update of a Coupon */
        patch: operations["StoreCoupons_UpdateCouponForStore"];
        trace?: never;
    };
    "/v1/stores/{storeId}/custom-variables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get custom variables
         * @description Retrieves all custom variables for the specified store.
         */
        get: operations["CustomVariables_GetCustomVariablesForStore"];
        put?: never;
        /**
         * Create custom variable
         * @description Creates a new custom variable for the specified store.
         *     Custom variables allow customers to provide additional input when purchasing products.
         */
        post: operations["CustomVariables_CreateCustomVariableForStore"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/custom-variables/{customVariableId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get custom variable
         * @description Retrieves a specific custom variable by ID from the specified store.
         */
        get: operations["CustomVariables_GetCustomVariableByIdForStore"];
        put?: never;
        post?: never;
        /**
         * Delete custom variable
         * @description Deletes a custom variable from the specified store.
         *     This will also delete all associated options and cannot be undone.
         */
        delete: operations["CustomVariables_DeleteCustomVariableForStore"];
        options?: never;
        head?: never;
        /**
         * Update custom variable
         * @description Performs a partial update of a custom variable using field mask.
         *     Only the fields specified in the request will be updated.
         */
        patch: operations["CustomVariables_UpdateCustomVariableForStore"];
        trace?: never;
    };
    "/v1/stores/{storeId}/customers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get customers
         * @description Retrieves all customers for the specified store.
         */
        get: operations["Customers_GetCustomers"];
        put?: never;
        /**
         * Create customer
         * @description Creates a new customer based on the fields passed.
         */
        post: operations["Customers_CreateCustomer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get customer by ID
         * @description Retrieves a customer by the ID for the specified store.
         */
        get: operations["Customers_GetCustomerById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update customer
         * @description Updates an existing customer based on the fields passed.
         */
        patch: operations["Customers_UpdateCustomer"];
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}/tokens": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create customer token
         * @description Generates a customer token that can be used by the Storefront (Headless) API.
         */
        post: operations["Customers_CreateCustomerToken"];
        /**
         * Invalidate customer tokens
         * @description Invalidates all generated customer tokens.
         */
        delete: operations["Customers_InvalidateCustomerTokens"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/lookup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lookup customer
         * @description Looks up a customer by an external platform ID.
         */
        get: operations["Customers_LookupCustomer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk create customers
         * @description Creates up to 200 customers at once.
         */
        post: operations["Customers_BulkCreateCustomers"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/data-migrations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataMigrations_GetDataMigrations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/data-migrations/tebex": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DataMigrations_StartDataMigrationFromTebex"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/deliverables/{deliverableId}/commands/resend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Deliverables_ResendCommandsForGameServer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/product_versions/{productVersionId}/discord_actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductsDiscord_GetActions"];
        put: operations["ProductsDiscord_CreateAction"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/discord": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrdersDiscord_GetLinkedDiscordAccounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/discord/queued": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OrdersDiscord_GetDiscordActionExecutionHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/queued": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DiscordInventoryItem_GetQueuedDiscordActionForDeliveryItem"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DiscordInventoryItem_GetUserToDeliveryItemLinks"];
        put: operations["DiscordInventoryItem_SetUserToDeliveryItemLink"];
        post?: never;
        delete: operations["DiscordInventoryItem_DeleteUserToDeliveryItemLink"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DiscordServers_GetDiscordServerLinks"];
        put?: never;
        post: operations["DiscordServers_CreateDiscordServerLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/links/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DiscordServers_DeleteDiscordServerLinks"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/{discordServerId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DiscordServers_GetDiscordServerRoles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/{discordServerId}/discord/text_channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DiscordServers_GetDiscordServerTextChannels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductsDownloadableFile_GetDownloadableFiles"];
        put?: never;
        post: operations["ProductsDownloadableFile_StartDownloadableFileUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/finish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ProductsDownloadableFile_FinishDownloadableFileUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/download-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductsDownloadableFile_CreateDownloadUrl"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["ProductsDownloadableFile_DeleteDownloadableFile"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/global-commands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get global commands
         * @description Retrieves all global commands for the specified store.
         */
        get: operations["GlobalCommands_GetGlobalCommands"];
        put?: never;
        /**
         * Create global command
         * @description Creates a global command for a store.
         */
        post: operations["GlobalCommands_CreateGlobalCommand"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/global-commands/{globalCommandId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete global command
         * @description Deletes a global command for a store.
         */
        delete: operations["GlobalCommands_DeleteGlobalCommand"];
        options?: never;
        head?: never;
        /**
         * Update global command
         * @description Updates a global command for a store.
         */
        patch: operations["GlobalCommands_UpdateGlobalCommand"];
        trace?: never;
    };
    "/v1/stores/{storeId}/marketing/abandoned-checkouts/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the abandoned checkout behaviour for a store */
        get: operations["StoreAbandonedCheckouts_GetStoreAbandonedCheckoutConfigurationOptions"];
        /** Sets the abandoned checkout behaviour for a store */
        put: operations["StoreAbandonedCheckouts_SetStoreAbandonedCheckoutConfigurationOptions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/marketing/purchase-follow-ups/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the purchase follow up behaviour for a store */
        get: operations["StorePurchaseFollowUps_GetStorePurchaseFollowUpConfigurationOptions"];
        /** Sets the purchase follow up behaviour for a store */
        put: operations["StorePurchaseFollowUps_SetStorePurchaseFollowUpConfigurationOptions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get orders
         * @description Retrieves all orders for the specified store.
         */
        get: operations["Orders_GetOrders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get order by ID
         * @description Retrieves an order by the ID for the specified store.
         */
        get: operations["Orders_GetOrderById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/refund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refund order by ID
         * @description Creates a refund for an order by the ID for the specified store.
         */
        post: operations["Orders_RefundOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get products
         * @description Retrieves all products for the specified store.
         *     DO NOT USE THIS ROUTE FOR DISPLAYING PRODUCTS ON YOUR STOREFRONT, use the storefront API instead.
         */
        get: operations["Products_GetProducts"];
        put?: never;
        /**
         * Create product
         * @description Creates a new product in the specified store.
         *     Creating dynamic products while creating a checkout session via this endpoint without prior approval is prohibited and will result in store deactivation per our User Agreement.
         */
        post: operations["Products_CreateProduct"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product
         * @description Retrieves a specific product by ID from the specified store.
         *     DO NOT USE THIS ROUTE FOR DISPLAYING PRODUCTS ON YOUR STOREFRONT, use the storefront API instead.
         */
        get: operations["Products_GetProduct"];
        put?: never;
        post?: never;
        /**
         * Delete product
         * @description Deletes a product from the specified store.
         */
        delete: operations["Products_DeleteProduct"];
        options?: never;
        head?: never;
        /**
         * Update product
         * @description Updates an existing product in the specified store.
         */
        patch: operations["Products_UpdateProduct"];
        trace?: never;
    };
    "/v1/stores/{storeId}/products/sort-order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update product sort order
         * @description Updates the sort order of products in the specified store.
         */
        post: operations["Products_UpdateProductSortOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/pricing/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductsPricing_GetProductPricingRegions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/pricing/regions/{regionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ProductsPricing_SetProductPricingRegionOverride"];
        trace?: never;
    };
    "/v1/stores/{storeId}/products/pricing/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductsPricing_GetStorePricingRegions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/pricing/regions/{regionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["ProductsPricing_SetStorePricingRegionOverride"];
        trace?: never;
    };
    "/v1/stores/{storeId}/products/pricing/region-groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProductsPricing_GetStorePricingRegionGroups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/trust/onboarding/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TrustStoreOnboarding_GetStoreOnboardingStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subscriptions
         * @description Retrieves all subscriptions for the specified store.
         */
        get: operations["Subscriptions_GetSubscriptions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/subscriptions/{subscriptionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subscription by ID
         * @description Retrieves a subscription for the specified store by the supplied ID.
         */
        get: operations["Subscriptions_GetSubscriptionById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/subscriptions/{subscriptionId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel subscription by ID
         * @description Cancels a subscription for the specified store by the supplied ID.
         */
        post: operations["Subscriptions_CancelSubscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/tags/{tagId}/image-upload-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tag image upload URL
         * @description Retrieves an image upload URL for a tag.
         */
        get: operations["Tags_GetTagImageUploadUrl"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/tags/{tagId}/image-upload-finish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Finish tag image upload URL
         * @description Finishes an image upload for a tag.
         */
        post: operations["Tags_FinishTagImageUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/tags/{tagId}/image": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete tag image URL
         * @description Deletes an image for a tag.
         */
        delete: operations["Tags_DeleteTagImage"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Webhooks_GetSubscriptions"];
        put?: never;
        post: operations["Webhooks_CreateSubscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks/variables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Webhooks_GetVariables"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks/{webhookId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["Webhooks_DeleteSubscription"];
        options?: never;
        head?: never;
        patch: operations["Webhooks_UpdateSubscription"];
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks/{webhookId}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Webhooks_GetHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Represents the store-level configuration for abandoned checkout settings. */
        AbandonedCheckoutStoreConfigurationDto: {
            store_id: components["schemas"]["FlakeId"];
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            /** @description A value indicating whether the abandoned checkout configuration for the store is invalid. */
            invalid: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: number | null;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: number | null;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: number | null;
            max_coupons_global_period?: components["schemas"]["Period"];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
            updated_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the configuration was last updated.
             */
            updated_at: string;
        };
        /** @description Used for updating the store-level configuration for abandoned checkout settings. */
        AbandonedCheckoutStoreConfigurationUpdateDto: {
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: number | null;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: number | null;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: number | null;
            max_coupons_global_period?: components["schemas"]["Period"];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
        };
        ActorDto: {
            type: components["schemas"]["PayNowActorType"];
            id: components["schemas"]["FlakeId"];
        };
        /** @enum {string} */
        AffiliateLinkCommissionType: "none" | "fixed" | "percentage";
        /** @enum {string} */
        AffiliateLinkDiscountType: "none" | "fixed" | "percentage";
        AffiliateLinkDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            wallet_id: string;
            enabled: boolean;
            code: string;
            referer_type: components["schemas"]["AffiliateLinkRefererType"];
            /** Format: int32 */
            tracking_length_days: number;
            apply_for_subscriptions: boolean;
            discount_type: components["schemas"]["AffiliateLinkDiscountType"];
            /** Format: int64 */
            discount_amount: number;
            commission_type: components["schemas"]["AffiliateLinkCommissionType"];
            /** Format: int64 */
            commission_amount: number;
            created_by: components["schemas"]["ActorDto"];
            /** Format: date-time */
            created_at: string;
            updated_by?: components["schemas"]["ActorDto"];
            /** Format: date-time */
            updated_at?: string | null;
        };
        /** @enum {string} */
        AffiliateLinkRefererType: "invalid" | "first_referer" | "last_referer";
        BanDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            reason: string;
            enabled: boolean;
            identities: components["schemas"]["BanIdentityDto"][];
            created_by: components["schemas"]["ActorDto"];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at?: string | null;
            updated_by?: components["schemas"]["ActorDto"];
            /** Format: date-time */
            expires_at?: string | null;
        };
        BanIdentityDto: {
            ban_type: components["schemas"]["BanType"];
            ban_type_value: string;
        };
        /** @enum {string} */
        BanType: "unknown" | "steam" | "ip" | "customer" | "customer_name" | "email";
        CheckForBanIDByIdentitiesRequestDto: {
            identities: components["schemas"]["BanIdentityDto"][];
        };
        /**
         * @description Specifies the type of discount applied by a coupon.
         * @enum {string}
         */
        CouponDiscountTypeEnum: "unspecified" | "percent" | "amount";
        /** @description Represents a detailed view of a coupon, including configuration and audit information. */
        CouponDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Indicates whether the coupon is enabled. */
            enabled: boolean;
            /** @description The unique code associated with the coupon. */
            code: string;
            /** @description A note or internal description of the coupon. */
            note?: string | null;
            duration: components["schemas"]["CouponDurationEnum"];
            /**
             * Format: int32
             * @description The number of months the coupon is valid, used if the duration is repeating.
             */
            duration_in_months?: number | null;
            discount_type: components["schemas"]["CouponDiscountTypeEnum"];
            /**
             * Format: int64
             * @description The discount amount in the smallest currency unit (e.g., cents).
             */
            discount_amount: number;
            /** @description Indicates whether the discount should be applied individually to required tags or products. */
            discount_apply_individually: boolean;
            /** @description Indicates whether the discount is applied before existing sales. */
            discount_apply_before_sales: boolean;
            /** @description A list of product IDs the coupon applies to. */
            apply_to_products?: components["schemas"]["FlakeId"][] | null;
            /** @description A list of tag IDs the coupon applies to. */
            apply_to_tags?: components["schemas"]["FlakeId"][] | null;
            usable_by_customer_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int64
             * @description The minimum order value required to use the coupon.
             */
            minimum_order_value: number;
            /** @description Indicates whether a global redemption limit is enabled. */
            redeem_limit_store_enabled: boolean;
            /**
             * Format: int64
             * @description The maximum number of times the coupon can be redeemed across the store.
             */
            redeem_limit_store_amount: number;
            /** @description Indicates whether a per-customer redemption limit is enabled. */
            redeem_limit_customer_enabled: boolean;
            /**
             * Format: int64
             * @description The maximum number of times the coupon can be redeemed per customer.
             */
            redeem_limit_customer_amount: number;
            /** @description Indicates whether the coupon can be used for one-time purchases. */
            usable_on_one_time_purchase: boolean;
            /** @description Indicates whether the coupon can be used for subscriptions. */
            usable_on_subscription: boolean;
            /**
             * Format: date-time
             * @description The date and time when the coupon becomes valid.
             */
            usable_at?: string | null;
            /**
             * Format: date-time
             * @description The date and time when the coupon expires.
             */
            expires_at?: string | null;
            created_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the coupon was created.
             */
            created_at: string;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the coupon was last updated.
             */
            updated_at?: string | null;
        };
        /**
         * @description Defines the duration for which a coupon remains valid.
         * @enum {string}
         */
        CouponDurationEnum: "once" | "forever" | "repeating";
        CreateAffiliateLinkDto: {
            wallet_id: string;
            enabled: boolean;
            code: string;
            referer_type: components["schemas"]["AffiliateLinkRefererType"];
            /** Format: int32 */
            tracking_length_days: number;
            apply_for_subscriptions: boolean;
            discount_type: components["schemas"]["AffiliateLinkDiscountType"];
            /** Format: int64 */
            discount_amount: number;
            commission_type: components["schemas"]["AffiliateLinkCommissionType"];
            /** Format: int64 */
            commission_amount: number;
        };
        /** @description Represents a line item in a checkout session request */
        CreateCheckoutSessionLineDto: {
            product_id: components["schemas"]["FlakeId"];
            /** @description Determines whether this line should create a subscription */
            subscription: boolean;
            gift_to?: components["schemas"]["CustomerPlatformAccountDto"];
            gift_to_customer_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The quantity of this product to purchase
             */
            quantity: number;
            selected_gameserver_id?: components["schemas"]["FlakeId"];
            /** @description Optional metadata to associate with the checkout session line.
             *     Do not store any sensitive information here. */
            metadata?: {
                [key: string]: string;
            } | null;
            /** @description Key-value pair mapping custom variable identifiers to their selected values.
             *     Required only when the product includes custom variables. */
            custom_variables?: {
                [key: string]: string;
            } | null;
        };
        /** @description Represents a line item in a checkout session request.
         *     Opposed to CreateCheckoutSessionLineDto, this is used while creating a checkout session using the Management API,
         *     and allows for creating inline products (which is subject to special approval) */
        CreateCheckoutSessionLineManagementDto: {
            /** @description Determines whether this line should create a subscription */
            subscription: boolean;
            gift_to?: components["schemas"]["CustomerPlatformAccountDto"];
            gift_to_customer_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The quantity of this product to purchase
             */
            quantity: number;
            selected_gameserver_id?: components["schemas"]["FlakeId"];
            /** @description Optional metadata to associate with the checkout session line.
             *     Do not store any sensitive information here. */
            metadata?: {
                [key: string]: string;
            } | null;
            /** @description Key-value pair mapping custom variable identifiers to their selected values.
             *     Required only when the product includes custom variables. */
            custom_variables?: {
                [key: string]: string;
            } | null;
            product_id?: components["schemas"]["FlakeId"];
            inline_product?: components["schemas"]["InlineProductCreateDto"];
        };
        /** @description Request to create a new checkout session from your back-end server using the management API.
         *     `customer_id` needs to be specified explicitly here instead of using a Customer token. */
        CreateCheckoutSessionManagementDto: {
            /** @description The line items to include in the checkout */
            lines: components["schemas"]["CreateCheckoutSessionLineManagementDto"][];
            /**
             * @deprecated
             * @description Whether this checkout creates a subscription.
             *     DEPRECATED: Use 'subscription' field in 'lines' array objects instead.
             */
            subscription: boolean;
            coupon_id?: components["schemas"]["FlakeId"];
            /** @description Optional affiliate code to track referrals */
            affiliate_code?: string | null;
            /** @description Optional URL to redirect to after successful checkout */
            return_url?: string | null;
            /** @description Optional URL to redirect to if checkout is canceled */
            cancel_url?: string | null;
            /** @description Whether to automatically redirect the customer (return_url must be set) */
            auto_redirect: boolean;
            /** @description Optional metadata to associate with the checkout session.
             *     Do not store any sensitive information here. */
            metadata?: {
                [key: string]: string;
            } | null;
            customer_id: components["schemas"]["FlakeId"];
        };
        /** @description Response after creating a checkout session */
        CreateCheckoutSessionResponseDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The token for the checkout session */
            token: string;
            /** @description The URL to redirect the customer to complete checkout */
            url: string;
        };
        CreateDownloadableFileDownloadUrlResponseDto: {
            download_signed_url: string;
        };
        CreateRefundRequestDto: {
            order_line_id?: components["schemas"]["FlakeId"];
            /** @description Determines if the refund should be taken from the connected user's balance.
             *     Only relevant for connected platforms. */
            refund_from_connected_user_balance?: boolean | null;
        };
        CreateWebhookDto: {
            url: string;
            subscribed_to: components["schemas"]["WebhookEventType"];
            type: components["schemas"]["WebhookType"];
            discord_description_template?: string | null;
            discord_title?: string | null;
            discord_color?: string | null;
        };
        CustomVariableDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Unique identifier string used to reference this custom variable programmatically.
             *     Must contain only letters, numbers, underscores, and hyphens. */
            identifier: string;
            /** @description Display name for the custom variable shown to customers. */
            name: string;
            /** @description Description explaining what this custom variable is for. Can be shown to customers. */
            description: string;
            type: components["schemas"]["CustomVariableType"];
            /** @description Optional regex pattern to validate text/number input values.
             *     Only applies to text and number types.
             *     Uses RE2 syntax - does not support negative lookarounds, backreferences, or other advanced regex features. */
            value_regex?: string | null;
            /** @description Available options for dropdown type custom variables.
             *     Empty for text and number types. */
            options: components["schemas"]["CustomVariableOptionDto"][];
            created_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description When this custom variable was created.
             */
            created_at: string;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description When this custom variable was last updated.
             *     Null if never updated.
             */
            updated_at?: string | null;
        };
        CustomVariableLineItemDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The identifier used to reference this custom variable (e.g., "color", "size"). */
            identifier: string;
            /** @description The display name of the custom variable shown to users. */
            name: string;
            /** @description A detailed description of what this custom variable represents. */
            description: string;
            /**
             * Format: int64
             * @description The price associated with this custom variable in the smallest currency unit (e.g., cents).
             */
            price: number;
            /** @description The selected value for this custom variable. */
            value: string;
        };
        CustomVariableOptionDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            custom_variable_id: components["schemas"]["FlakeId"];
            /** @description Display name shown to customers for this option. */
            name: string;
            /** @description Internal value used for product command variable replacement, without brackets. */
            value: string;
            /**
             * Format: int64
             * @description Price modification when this option is selected.
             *     Interpretation depends on PriceType (fixed amount or percentage).
             */
            price: number;
            price_type: components["schemas"]["CustomVariableOptionPriceType"];
            /** @description Whether this option is selected by default when the custom variable is presented.
             *     Only one option per custom variable should be marked as default. */
            is_default: boolean;
            /**
             * Format: int32
             * @description Sort order for displaying options to customers.
             *     Lower numbers appear first.
             */
            sort_order: number;
        };
        /**
         * @description Defines how option pricing should be applied to the base product price.
         * @enum {string}
         */
        CustomVariableOptionPriceType: "fixed" | "percentage";
        /** @description Request model for defining custom variable options.
         *     Used within UpsertCustomVariableRequestDto for dropdown-type variables. */
        CustomVariableOptionRequestDto: {
            id?: components["schemas"]["FlakeId"];
            /** @description Display name shown to customers for this option. */
            name: string;
            /** @description The value the command variable will be replaced with. */
            value: string;
            /**
             * Format: int64
             * @description Price modification when this option is selected.
             *     Interpretation depends on PriceType (fixed amount or percentage).
             *     If fixed, the value is in cents, if a percentage, in permille.
             */
            price: number;
            price_type: components["schemas"]["CustomVariableOptionPriceType"];
            /** @description Whether this option is selected by default.
             *     Only one option per custom variable should be marked as default. */
            is_default: boolean;
        };
        /**
         * @description Defines the type of input method for a custom variable.
         * @enum {string}
         */
        CustomVariableType: "dropdown" | "text" | "number";
        /** @description Represents a customer in the PayNow system with their associated profiles and metadata. */
        CustomerDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            profile?: components["schemas"]["GenericProfileDto"];
            /**
             * @description The customer's 64-bit Steam ID, if they have linked their Steam account.
             * @example 76561198045784099
             */
            steam_id?: string | null;
            steam?: components["schemas"]["SteamProfileDto"];
            /**
             * @description The customer's Minecraft UUID, if they have linked their Minecraft account.
             *     Not set for offline Minecraft stores. If the platform type is Minecraft - Geyser,
             *     and the profile is a bedrock account, this will be a UUID generated from the Xbox XUID.
             * @example f84c6a79-0a4e-45e0-879b-cd49ebd4c4e2
             */
            minecraft_uuid?: string | null;
            minecraft?: components["schemas"]["MinecraftProfileDto"];
            /** @description The customer's Xbox XUID, if available. */
            xbox_xuid?: string | null;
            minecraft_platform?: components["schemas"]["CustomerMinecraftPlatform"];
            /**
             * @description The display name for the customer.
             * @example m0uka
             */
            name?: string | null;
            /**
             * Format: date-time
             * @description The date and time when the customer was created in the system.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The date and time when the customer was last updated, if applicable.
             */
            updated_at?: string | null;
            /** @description Additional custom data associated with the customer. */
            metadata: {
                [key: string]: string;
            };
        };
        /** @enum {string} */
        CustomerMinecraftPlatform: "unknown" | "java" | "bedrock";
        /** @description Represents a customer platform association, used for gifting */
        CustomerPlatformAccountDto: {
            platform: components["schemas"]["CustomerProfilePlatform"];
            /**
             * @description The account ID on the platform
             * @example 76561198152492642
             */
            id: string;
        };
        /**
         * @description A customer platform type used while gifting
         * @enum {string}
         */
        CustomerProfilePlatform: "invalid" | "steam" | "minecraft" | "paynow_name";
        CustomerTokenResponseDto: {
            /** @description The generated Customer token. */
            token: string;
        };
        DataMigrationTaskDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Platform from which data is being migrated (e.g., "tebex"). */
            platform: string;
            /** @description Masked authentication token used for accessing the source platform API. */
            token: string;
            /** @description Error message if the migration encountered any errors, otherwise null. */
            error?: string | null;
            /**
             * Format: date-time
             * @description Timestamp when the migration was initiated.
             */
            started_at: string;
            /**
             * Format: date-time
             * @description Timestamp when the migration failed, or null if it didn't fail.
             */
            failed_at?: string | null;
            /**
             * Format: date-time
             * @description Timestamp when the migration was successfully completed, or null if not completed.
             */
            completed_at?: string | null;
            /**
             * Format: int64
             * @description Total number of entities that need to be migrated, or null if unknown.
             */
            total_entities_to_migrate?: number | null;
            /**
             * Format: int32
             * @description Number of entities that have been successfully migrated.
             */
            total_entities_migrated: number;
            started_by: components["schemas"]["ActorDto"];
        };
        DiscordActionDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            discord_server_id: components["schemas"]["FlakeId"];
            execution_stage: components["schemas"]["DiscordActionExecutionStage"];
            revocation_stages: components["schemas"]["DiscordActionRevocationStage"][];
            action_type: components["schemas"]["DiscordActionType"];
            channel_id?: components["schemas"]["FlakeId"];
            role_id?: components["schemas"]["FlakeId"];
            message?: string | null;
        };
        /** @enum {string} */
        DiscordActionExecutionStage: "on_purchase" | "on_expire" | "on_refund" | "on_chargeback";
        /** @enum {string} */
        DiscordActionRevocationStage: "on_expire" | "on_refund" | "on_chargeback";
        /** @enum {string} */
        DiscordActionType: "persist_role" | "send_message" | "ban_user" | "kick_user" | "generate_invite_link";
        DiscordProfileDto: {
            discord_id: components["schemas"]["FlakeId"];
            username: string;
            avatar_hash: string;
        };
        DiscordServerChannelDto: {
            id: string;
            name: string;
            category: string;
        };
        DiscordServerLinkDto: {
            token: string;
            store_id: components["schemas"]["FlakeId"];
            server_id?: components["schemas"]["FlakeId"];
            server_name?: string | null;
            server_icon_url?: string | null;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            linked_at?: string | null;
        };
        DiscordServerRoleDto: {
            id: components["schemas"]["FlakeId"];
            name: string;
        };
        ExecutedWebhookDto: {
            id: components["schemas"]["FlakeId"];
            /** Format: date-time */
            started_at: string;
            /** Format: date-time */
            finished_at?: string | null;
            /** Format: int32 */
            status_code: number;
            response?: string | null;
        };
        FinishTagImageUploadUrlRequestDto: {
            /** @description The ID of the uploaded image returned by the server. */
            image_id: string;
        };
        /**
         * Format: flake-id
         * @example 411486491630370816
         */
        FlakeId: string;
        /** @description Represents a generic platform profile for a customer. */
        GenericProfileDto: {
            /** @description The platform-specific identifier for the profile. */
            id: string;
            /**
             * @description The name of the platform this profile belongs to.
             * @example steam
             */
            platform: string;
            /** @description The display name of the user on this platform. */
            name: string;
            /** @description The URL to the user's avatar image on this platform. */
            avatar_url?: string | null;
        };
        GetTagImageUploadUrlResponseDto: {
            /** @description The ID of the direct image upload URL. */
            id: string;
            /** @description The URL to upload the image to. */
            upload_url: string;
        };
        /** @description Represents a global command in the system.
         *     Global commands are instructions that can be executed across a store's environment. */
        GlobalCommandDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            stage: components["schemas"]["ProductCommandStage"];
            /** @description The actual command content to be executed. */
            content: string;
            /** @description Indicates whether the command should only be executed when the player is online. */
            online_only: boolean;
            /** @description List of specific game server IDs where this command should be executed, overriding default behavior. */
            override_execute_on_gameserver_ids: components["schemas"]["FlakeId"][];
            /**
             * Format: date-time
             * @description Timestamp when the command was created.
             */
            created_at: string;
            created_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description Optional timestamp indicating when the command was last updated.
             *     Null if the command has never been updated.
             */
            updated_at?: string | null;
            updated_by?: components["schemas"]["ActorDto"];
        };
        /** @description Optional inline product definition for dynamic products.
         *     Requires special approval, use `product_id` instead. */
        InlineProductCreateDto: {
            /** @description The unique URL-safe identifier (slug) for the product. */
            slug?: string | null;
            /** @description The display name of the product. */
            name?: string | null;
            /** @description The detailed description of the product. */
            description?: string | null;
            /** @description The display label for the product. */
            label?: string | null;
            /**
             * Format: int64
             * @description The price of the product in the lowest denominator (e.g. cents).
             */
            price?: number | null;
            /** @description Indicates whether the customer is prompted to select a game server before purchasing. */
            single_game_server_only?: boolean | null;
            /** @description Indicates whether one-time purchases are allowed. */
            allow_one_time_purchase?: boolean | null;
            /** @description Indicates whether subscription purchases are allowed. */
            allow_subscription?: boolean | null;
            /**
             * Format: int32
             * @description The subscription interval value.
             */
            subscription_interval_value?: number | null;
            subscription_interval_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Indicates whether automatic removal is enabled. */
            remove_after_enabled?: boolean | null;
            /**
             * Format: int32
             * @description The time value for automatic removal.
             */
            remove_after_time_value?: number | null;
            remove_after_time_scale?: components["schemas"]["ProductRemoveAfterIntervalScale"];
            store_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            customer_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            /** @description Indicates whether removed items should be excluded from stock limits. */
            stock_limit_do_not_include_removed?: boolean | null;
            /** @description The tag IDs associated with the product. */
            tags?: components["schemas"]["FlakeId"][] | null;
            /** @description The gameserver IDs associated with the product. */
            gameservers?: components["schemas"]["FlakeId"][] | null;
            /** @description The commands to be executed at different stages. */
            commands?: components["schemas"]["ProductCommandDto"][] | null;
            deliverable_actions?: components["schemas"]["ProductDeliverableActionsDto"];
            /** @description Additional metadata for the product. */
            metadata?: {
                [key: string]: string;
            } | null;
            /** @description The payout splits for revenue distribution.
             *     Requires special approval. */
            payout_splits?: components["schemas"]["ProductPayoutSplitDto"][] | null;
            tax_code?: components["schemas"]["ProductTaxCode"];
            /** @description Indicates whether concurrent active items are allowed. */
            allow_concurrent_active_items?: boolean | null;
            /** @description Indicates whether using coupons and gift cards on this product is allowed. */
            disable_promo_codes?: boolean | null;
            /** @description Indicates whether the product is hidden. */
            is_hidden?: boolean | null;
            /** @description Indicates whether gifting is disabled. */
            is_gifting_disabled?: boolean | null;
            /**
             * Format: date-time
             * @description The date and time when the product becomes enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_at?: string | null;
            /**
             * Format: date-time
             * @description The date and time until which the product remains enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_until?: string | null;
            /** @description The IDs of products required for purchasing this product. */
            required_product_ids?: components["schemas"]["FlakeId"][] | null;
            /** @description Indicates whether all required products are needed. */
            required_product_all?: boolean | null;
            /** @description The IDs of associated custom variables. */
            custom_variable_ids?: components["schemas"]["FlakeId"][] | null;
        };
        /** @description The last payment decline object. */
        LastPaymentErrorDto: {
            decline_code: components["schemas"]["PaymentDeclineCode"];
            /** @description Human-readable decline reason message. */
            message: string;
        };
        /** @description Represents the configuration settings for a coupon applied to marketing features. */
        MarketingCouponConfigurationDto: {
            duration: components["schemas"]["CouponDurationEnum"];
            /**
             * Format: int32
             * @description Gets or sets the duration of the coupon in months, applicable only for repeating coupons.
             */
            duration_in_months?: number | null;
            discount_type: components["schemas"]["CouponDiscountTypeEnum"];
            /**
             * Format: int64
             * @description Gets or sets the discount amount.
             */
            discount_amount: number;
            /** @description Gets or sets a value indicating whether the discount only applies to specific tags or products. */
            discount_only_required_tags_or_products: boolean;
            /** @description Gets or sets a value indicating whether the discount is applied before any existing sales or discounts. */
            discount_apply_before_sales: boolean;
            /** @description Gets or sets the list of tag IDs required for the discount to apply. */
            required_tag_ids: components["schemas"]["FlakeId"][];
            /** @description Gets or sets the list of product IDs required for the discount to apply. */
            required_product_ids: components["schemas"]["FlakeId"][];
            /**
             * Format: int64
             * @description Gets or sets the minimum order value required for the discount to be applied.
             */
            minimum_order_value: number;
            /** @description Gets or sets a value indicating whether a customer-specific redeem limit is enabled. */
            customer_redeem_limit_enabled: boolean;
            /**
             * Format: int64
             * @description Gets or sets the maximum number of times a single customer can redeem the coupon.
             */
            customer_redeem_limit: number;
            /** @description Gets or sets a value indicating whether the coupon can be used on one-time purchases. */
            usable_on_one_time_purchases: boolean;
            /** @description Gets or sets a value indicating whether the coupon can be used on subscription purchases. */
            usable_on_subscriptions: boolean;
            expires_after?: components["schemas"]["Period"];
        };
        /** @description Represents a Minecraft profile for a customer. */
        MinecraftProfileDto: {
            /**
             * @description The UUID of the Minecraft player.
             *     If the platform is Minecraft Offline, this will be the name itself.
             *     If the platform is Minecraft Geyser, and this is a Bedrock account, this ID will be an Xbox XUID.
             * @example f84c6a79-0a4e-45e0-879b-cd49ebd4c4e2
             */
            id: string;
            /**
             * @description The username of the Minecraft player.
             * @example notch
             */
            name: string;
            /** @description The URL to the player's Minecraft skin rendered as an avatar. */
            avatar_url: string;
        };
        /** @description Represents a customer order */
        OrderDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The PayNow order ID identifier starting with pn-.
             * @example pn-355eevennsow
             */
            pretty_id: string;
            store_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            customer: components["schemas"]["CustomerDto"];
            type: components["schemas"]["OrderType"];
            status: components["schemas"]["OrderStatus"];
            checkout_id?: components["schemas"]["FlakeId"];
            /**
             * @description The checkout token for this order
             * @example c4qqilpphugeqf2gndnkk5ad8fdq
             */
            checkout_token?: string | null;
            subscription_id?: components["schemas"]["FlakeId"];
            /** @description Signifies if the order is a subscription order */
            readonly is_subscription: boolean;
            coupon_id?: components["schemas"]["FlakeId"];
            giftcard_id?: components["schemas"]["FlakeId"];
            affiliate_id?: components["schemas"]["FlakeId"];
            /**
             * @description The billing name for this order
             * @example John Doe
             */
            billing_name: string;
            /**
             * @description The billing email for this order
             * @example john.doe@example.com
             */
            billing_email: string;
            /**
             * @description The billing country for this order
             * @example US
             */
            billing_country: string;
            /**
             * Format: int32
             * @description The billing cycle sequence (current renewal count) if this is a subscription order
             */
            billing_cycle_sequence: number;
            /**
             * @description The IP address (IPv4 or IPv6) of the customer at time of order
             * @example 192.168.1.1
             */
            customer_ip: string;
            /**
             * @description The currency code used for this order
             * @example usd
             */
            currency: string;
            /**
             * Format: int32
             * @description The total discount amount applied to this order in smallest currency unit
             * @example 500
             */
            discount_amount: number;
            /**
             * @description The discount amount formatted as a string
             * @example $5.00
             */
            discount_amount_str: string;
            /**
             * Format: int32
             * @description The subtotal amount for this order in smallest currency unit
             * @example 9995
             */
            subtotal_amount: number;
            /**
             * @description The subtotal amount formatted as a string
             * @example $99.95
             */
            subtotal_amount_str: string;
            /**
             * Format: int32
             * @description The tax amount for this order in smallest currency unit
             * @example 999
             */
            tax_amount: number;
            /**
             * @description The tax amount formatted as a string
             * @example $9.99
             */
            tax_amount_str: string;
            /**
             * Format: int32
             * @description The total amount for this order in smallest currency unit
             * @example 10494
             */
            total_amount: number;
            /**
             * @description The total amount formatted as a string
             * @example $104.94
             */
            total_amount_str: string;
            /**
             * Format: int32
             * @description The amount of gift card value used for this order in smallest currency unit
             * @example 0
             */
            giftcard_usage_amount: number;
            /**
             * @description The gift card usage amount formatted as a string
             * @example $0.00
             */
            giftcard_usage_amount_str: string;
            /**
             * Format: date-time
             * @description The date and time when this order was created
             * @example 2025-04-01T15:30:45Z
             */
            created_at?: string | null;
            /**
             * Format: date-time
             * @description The date and time when this order was completed, if applicable
             * @example 2025-04-01T15:35:22Z
             */
            completed_at?: string | null;
            /** @description The line items in this order */
            lines: components["schemas"]["OrderLineDto"][];
            /** @description A list of all tax jurisdictions that were involved in the taxation of this order. */
            tax_jurisdictions?: components["schemas"]["SalesTaxJurisdictionDto"][] | null;
            last_payment_error?: components["schemas"]["LastPaymentErrorDto"];
        };
        /** @description Represents an order line item in a customer's order */
        OrderLineDto: {
            id: components["schemas"]["FlakeId"];
            checkout_line_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            /**
             * @description The name of the product in this order line
             * @example Premium Game Pass
             */
            product_name: string;
            /**
             * @description The URL of the product image
             * @example https://cdn.example.com/images/premium-game-pass.jpg
             */
            product_image_url?: string | null;
            subscription_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The interval value for subscription products
             * @example 1
             */
            subscription_interval_value?: number | null;
            subscription_interval_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            /**
             * @description Indicates whether this order line is a gift
             * @example false
             */
            gift: boolean;
            gift_to_customer_id?: components["schemas"]["FlakeId"];
            gift_to_customer?: components["schemas"]["CustomerDto"];
            sale_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The unit price of the product in the smallest currency unit (e.g., cents)
             * @example 1999
             */
            price: number;
            /**
             * @description The unit price of the product formatted as a string
             * @example $19.99
             */
            price_str: string;
            /**
             * Format: int32
             * @description The quantity of the product in this order line
             * @example 1
             */
            quantity: number;
            /**
             * Format: int32
             * @description The discount amount (from sales, coupons, and affiliate links) applied to this order line
             * @example 0
             */
            discount_amount: number;
            /**
             * @description The discount amount formatted as a string
             * @example $0.00
             */
            discount_amount_str: string;
            /**
             * Format: int32
             * @description The amount of gift card used for this order line
             * @example 0
             */
            giftcard_usage_amount: number;
            /**
             * @description The gift card usage amount formatted as a string
             * @example $0.00
             */
            giftcard_usage_amount_str: string;
            /**
             * Format: int32
             * @description The subtotal amount for this order line
             * @example 1999
             */
            subtotal_amount: number;
            /**
             * @description The subtotal amount formatted as a string
             * @example $19.99
             */
            subtotal_amount_str: string;
            /**
             * Format: int32
             * @description The tax amount for this order line
             * @example 200
             */
            tax_amount: number;
            /**
             * @description The tax amount formatted as a string
             * @example $2.00
             */
            tax_amount_str: string;
            /**
             * Format: int32
             * @description The total amount for this order line
             * @example 2199
             */
            total_amount: number;
            /**
             * @description The total amount formatted as a string
             * @example $21.99
             */
            total_amount_str: string;
            selected_gameserver_id?: components["schemas"]["FlakeId"];
            /**
             * @description Indicates whether tax is included in the base price, or added on top
             * @example false
             */
            tax_inclusive: boolean;
            /** @description The payout splits for this order line */
            payout_splits?: components["schemas"]["OrderLinePayoutSplitDto"][] | null;
            /**
             * @description The regional pricing region ID for this order line, null if no regional pricing set
             * @example eu
             */
            pricing_region_id?: string | null;
            /** @description Key-value pair of selected custom variables for this order. */
            custom_variables?: {
                [key: string]: components["schemas"]["CustomVariableLineItemDto"];
            } | null;
        };
        /** @description Represents an order line-level payout split. */
        OrderLinePayoutSplitDto: {
            user_id: components["schemas"]["FlakeId"];
            /**
             * Format: int64
             * @description The percentage in basis points.
             */
            percentage?: number | null;
            /**
             * Format: int64
             * @description The platform fee percentage in basis points.
             *     Only used by platforms.
             */
            platform_fee: number;
        };
        /** @enum {string} */
        OrderStatus: "created" | "completed" | "canceled" | "refunded" | "chargeback";
        /**
         * @description Defines the type of items contained in an order
         * @enum {string}
         */
        OrderType: "one_time" | "subscription" | "mixed";
        /** @enum {string} */
        PayNowActorType: "anonymous" | "user" | "customer" | "api_key" | "game_server" | "admin" | "internal" | "platform" | "global_customer";
        /** @description Represents a PayNow error */
        PayNowError: {
            /**
             * Format: int32
             * @description The HTTP status code.
             * @example 400
             */
            status: number;
            /**
             * @description The PayNow parseable error code.
             * @example bad-request
             */
            code: string;
            /**
             * @description The human-readable error message.
             * @example Bad Request Example
             */
            message: string;
            /**
             * @description A distributed trace ID used for debugging.
             * @example 234a5bcd543ef3fa53ce929d0e0e4736
             */
            trace_id?: string | null;
            /** @description An array of multiple errors. Only used by some API services. */
            errors?: components["schemas"]["ValidationError"][] | null;
        };
        /**
         * @description A payment decline reason code.
         * @enum {string}
         */
        PaymentDeclineCode: "unknown" | "generic_decline" | "call_issuer" | "authentication_required" | "currency_not_supported" | "duplicate_transaction" | "expired_card" | "fraudulent" | "incorrect_number" | "incorrect_cvc" | "incorrect_pin" | "incorrect_zip" | "insufficient_funds" | "invalid_account" | "invalid_amount" | "invalid_expiry_month" | "invalid_expiry_year" | "issuer_not_available" | "lost_card" | "merchant_blacklist" | "new_account_information_available" | "no_action_taken" | "pickup_card" | "pin_try_exceeded" | "restricted_card" | "stolen_card" | "testmode_decline" | "try_again_later" | "security_violation" | "card_velocity_exceeded" | "do_not_honor" | "processing_error" | "card_not_supported" | "transaction_not_allowed" | "authorization_revoked";
        /**
         * Format: period
         * @description ISO 8601 period format
         * @example P1Y2M3DT4H5M6S
         */
        Period: string;
        ProductCommandDto: {
            stage: components["schemas"]["ProductCommandStage"];
            /** @description Content of the command. */
            content: string;
            /** @description Value indicating whether the command should only execute when the player is online. */
            online_only: boolean;
            /** @description Value indicating on which game servers should the command be executed.
             *     If left empty or null, then the default behavior applies
             *     (executing on all game servers or on the selected game server is selection is enabled) */
            override_execute_on_gameserver_ids?: components["schemas"]["FlakeId"][] | null;
        };
        /**
         * @description Defines the stages at which product commands can be executed.
         * @enum {string}
         */
        ProductCommandStage: "invalid" | "on_purchase" | "on_expire" | "on_refund" | "on_renew" | "on_chargeback";
        ProductDeliverableActionsDto: {
            /** @description Value indicating whether to grant a giftcard with the product with the subtotal amount. */
            grant_giftcard: boolean;
        };
        ProductDownloadableFileDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            is_uploaded: boolean;
            file_name?: string | null;
            file_content_type?: string | null;
            /** Format: int64 */
            file_size?: number | null;
            file_hash?: string | null;
            description?: string | null;
            /** Format: date-time */
            created_at: string;
            created_by: components["schemas"]["ActorDto"];
            /** Format: date-time */
            updated_at?: string | null;
            updated_by?: components["schemas"]["ActorDto"];
        };
        ProductDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            version_id: components["schemas"]["FlakeId"];
            /** @description The URL to the product image. */
            image_url?: string | null;
            /** @description The unique slug for the product. */
            slug: string;
            /** @description The display name of the product. */
            name: string;
            /** @description The detailed description of the product. */
            description: string;
            /** @description The display label for the product. */
            label?: string | null;
            /**
             * Format: int32
             * @description The sort order for displaying the product.
             */
            sort_order: number;
            /**
             * Format: int64
             * @description The price of the product, in the lowest denominator (e.g. cents).
             */
            price: number;
            /** @description Indicates whether the product is limited to a single game server. */
            single_game_server_only: boolean;
            /** @description Indicates whether one-time purchases are allowed. */
            allow_one_time_purchase: boolean;
            /** @description Indicates whether subscription purchases are allowed. */
            allow_subscription: boolean;
            /**
             * Format: int32
             * @description The subscription interval value.
             */
            subscription_interval_value: number;
            subscription_interval_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Indicates whether automatic removal is enabled. */
            remove_after_enabled: boolean;
            /**
             * Format: int32
             * @description The time value for automatic removal.
             */
            remove_after_time_value: number;
            remove_after_time_scale: components["schemas"]["ProductRemoveAfterIntervalScale"];
            stock_available: components["schemas"]["ProductStockAvailableDto"];
            store_stock_limit: components["schemas"]["ProductStockLimitDto"];
            customer_stock_limit: components["schemas"]["ProductStockLimitDto"];
            /** @description Indicates whether removed items should be excluded from stock limits. */
            stock_limit_do_not_include_removed?: boolean | null;
            /** @description The tags associated with the product. */
            tags: components["schemas"]["ProductTagDto"][];
            /** @description The game servers associated with the product. */
            gameservers: components["schemas"]["ProductGameServerDto"][];
            /** @description The commands to be executed at different stages. */
            commands: components["schemas"]["ProductCommandDto"][];
            created_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the product was created.
             */
            created_at?: string | null;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the product was last updated.
             */
            updated_at?: string | null;
            deliverable_actions?: components["schemas"]["ProductDeliverableActionsDto"];
            /** @description Additional metadata for the product. */
            metadata?: {
                [key: string]: string;
            } | null;
            /** @description The payout splits for revenue distribution. */
            payout_splits?: components["schemas"]["ProductPayoutSplitDto"][] | null;
            tax_code?: components["schemas"]["ProductTaxCode"];
            /** @description Indicates whether concurrent active items are allowed. */
            allow_concurrent_active_items?: boolean | null;
            /** @description Indicates whether using coupons and gift cards on this product is allowed. */
            disable_promo_codes?: boolean | null;
            /** @description Indicates whether the product is hidden. */
            is_hidden?: boolean | null;
            /** @description Indicates whether gifting is disabled. */
            is_gifting_disabled?: boolean | null;
            /**
             * Format: date-time
             * @description The date and time when the product becomes enabled.
             */
            enabled_at?: string | null;
            /**
             * Format: date-time
             * @description The date and time until which the product remains enabled.
             */
            enabled_until?: string | null;
            /** @description The IDs of products required for purchasing this product. */
            required_product_ids?: components["schemas"]["FlakeId"][] | null;
            /** @description Indicates whether all required products are needed. */
            required_product_all?: boolean | null;
            /** @description The IDs of associated custom variables. */
            custom_variable_ids?: components["schemas"]["FlakeId"][] | null;
        };
        ProductGameServerDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The name of the game server.
             * @example US 2x TRIO
             */
            name: string;
            /** @description Indicates whether this game server is enabled. */
            enabled: boolean;
        };
        ProductPayoutSplitDto: {
            user_id: components["schemas"]["FlakeId"];
            /**
             * Format: int64
             * @description The percentage of the payment allocated to the user, in basis points (500 = 5%).
             *     The last payout split must have this field set to `null` to receive the remaining portion.
             */
            percentage?: number | null;
            /**
             * Format: int64
             * @description The platform fee percentage your platform receives, in basis points (500 = 5%).
             */
            platform_fee: number;
        };
        ProductPricingRegionDto: {
            id: string;
            group_id: string;
            local_currency: string;
            /** Format: double */
            local_currency_fx_rate: number;
            /** Format: double */
            blended_vat_rate: number;
            name: string;
            country_codes: string[];
            enabled: boolean;
            /** Format: int64 */
            price?: number | null;
            /** Format: int64 */
            default_price_multiplier?: number | null;
            currency?: string | null;
            tax_inclusive?: boolean | null;
            /** Format: date-time */
            updated_at?: string | null;
        };
        ProductPricingRegionGroupDto: {
            id: string;
            name: string;
            description: string;
            /** Format: int64 */
            recommended_base_price_multiplier: number;
        };
        ProductPricingRegionOverrideDto: {
            /** Format: int64 */
            price?: number | null;
            enabled?: boolean | null;
            currency?: string | null;
            tax_inclusive?: boolean | null;
        };
        /** @enum {string} */
        ProductRemoveAfterIntervalScale: "invalid" | "day" | "week" | "month";
        ProductStockAvailableDto: {
            /**
             * Format: int32
             * @description Indicates how many stock is left store-wide.
             */
            store_available: number;
            /** Format: int32 */
            customer_available: number;
        };
        ProductStockLimitDto: {
            /** @description Indicates whether stock limit is enabled. */
            enabled: boolean;
            /**
             * Format: int32
             * @description The quantity limit.
             */
            quantity?: number | null;
            /**
             * Format: int32
             * @description The time value for stock limit period.
             */
            time_value?: number | null;
            time_scale: components["schemas"]["ProductStockTimeScale"];
        };
        /** @enum {string} */
        ProductStockTimeScale: "invalid" | "day" | "week" | "month" | "year";
        /** @enum {string} */
        ProductSubscriptionIntervalScale: "invalid" | "day" | "week" | "month" | "year";
        ProductTagDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The unique slug for the tag.
             * @example packages
             */
            slug: string;
            /**
             * @description The display name of the tag.
             * @example Packages
             */
            name: string;
        };
        /**
         * @description Determines the category of the product for taxation purposes.
         *     Contact support for help with setting the correct tax code.
         * @enum {string}
         */
        ProductTaxCode: "unknown" | "digital_goods_subscription" | "digital_goods_permanent" | "saas" | "downloaded_software" | "digital_goods_subscription_gaming" | "digital_goods_permanent_gaming";
        /** @description Represents the store-level configuration for abandoned checkout settings. */
        PurchaseFollowUpStoreConfigurationDto: {
            store_id: components["schemas"]["FlakeId"];
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            /** @description A value indicating whether the abandoned checkout configuration for the store is invalid. */
            invalid: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: number | null;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: number | null;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: number | null;
            max_coupons_global_period?: components["schemas"]["Period"];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
            updated_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the configuration was last updated.
             */
            updated_at: string;
        };
        /** @description Used for updating the store-level configuration for abandoned checkout settings. */
        PurchaseFollowUpStoreConfigurationUpdateDto: {
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: number | null;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: number | null;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: number | null;
            max_coupons_global_period?: components["schemas"]["Period"];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
        };
        QueuedDiscordActionDto: {
            /** Format: int64 */
            id: number;
            execution_stage: components["schemas"]["DiscordActionExecutionStage"];
            status: components["schemas"]["QueuedDiscordActionStatus"];
            store_id: components["schemas"]["FlakeId"];
            order_id?: components["schemas"]["FlakeId"];
            delivery_item_id: components["schemas"]["FlakeId"];
            checkout_id?: components["schemas"]["FlakeId"];
            checkout_line_id?: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            discord_server_id: components["schemas"]["FlakeId"];
            action_type: components["schemas"]["DiscordActionType"];
            discord_user_id?: components["schemas"]["FlakeId"];
            channel_id?: components["schemas"]["FlakeId"];
            role_id?: components["schemas"]["FlakeId"];
            message?: string | null;
            revocation_stages: components["schemas"]["DiscordActionRevocationStage"][];
            /** Format: date-time */
            enqueued_at: string;
            /** Format: date-time */
            finalised_at?: string | null;
            executions: components["schemas"]["QueuedDiscordActionExecutionDto"][];
        };
        QueuedDiscordActionExecutionDto: {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            queue_id: number;
            /** Format: date-time */
            executed_at: string;
            execution_status: components["schemas"]["QueuedDiscordActionExecutionStatus"];
            message?: string | null;
            trace_id?: string | null;
        };
        /** @enum {string} */
        QueuedDiscordActionExecutionStatus: "success" | "failure";
        /** @enum {string} */
        QueuedDiscordActionStatus: "active" | "complete" | "errored" | "canceled";
        QueuedWebhookDto: {
            id: components["schemas"]["FlakeId"];
            webhook_id: components["schemas"]["FlakeId"];
            /** Format: date-time */
            created_at: string;
            state: components["schemas"]["WebhookState"];
            /** Format: date-time */
            next_retry?: string | null;
            event: components["schemas"]["WebhookEventType"];
            payload: unknown;
            executions: components["schemas"]["ExecutedWebhookDto"][];
        };
        RefundDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            payment_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            order_line_id?: components["schemas"]["FlakeId"];
            status: components["schemas"]["RefundStatus"];
            /** @description Reason for failure if the refund has failed */
            failure_reason?: string | null;
            /** @description Three-letter currency code of the refund */
            currency: string;
            /**
             * Format: int64
             * @description Amount of the refund in smallest currency unit (e.g., cents)
             */
            amount: number;
            /** @description String representation of the refund amount, formatted for display */
            amount_str: string;
            /**
             * Format: int64
             * @description Amount of payment processor fees in smallest currency unit
             */
            gateway_fee_amount: number;
            /** @description String representation of gateway fee amount, formatted for display */
            gateway_fee_amount_str: string;
            /**
             * Format: int64
             * @description Amount of tax being refunded in smallest currency unit
             */
            tax_amount: number;
            /** @description String representation of tax amount, formatted for display */
            tax_amount_str: string;
            /**
             * Format: int64
             * @description Amount of platform fees in smallest currency unit
             */
            platform_fee_amount: number;
            /** @description String representation of platform fee amount, formatted for display */
            platform_fee_amount_str: string;
            /**
             * Format: int64
             * @description Net amount for the store after fees in smallest currency unit
             */
            store_net_amount: number;
            /** @description String representation of store net amount, formatted for display */
            store_net_amount_str: string;
            /**
             * Format: int64
             * @description Amount of the refund to be paid by the store in smallest currency unit
             */
            store_refund_amount: number;
            /** @description String representation of store refund amount, formatted for display */
            store_refund_amount_str: string;
            /** @description Optional currency code used for presentment to the customer if different from the base currency */
            presentment_currency?: string | null;
            /**
             * Format: int64
             * @description Optional amount in presentment currency in smallest currency unit
             */
            presentment_amount?: number | null;
            /** @description Exchange rate used while refunding. Only present for payments made in non-settlement currency. */
            fx_rate?: string | null;
            /** @description Indicates whether the refund should be taken from the connected user's balance.
             *     Only relevant for platforms. */
            refund_from_connected_user_balance: boolean;
            /**
             * Format: date-time
             * @description Date and time when the refund was created
             */
            created_at: string;
            /**
             * Format: date-time
             * @description Optional date and time when the refund was approved
             */
            approved_at?: string | null;
            /**
             * Format: date-time
             * @description Optional date and time when the refund entered pending status
             */
            pending_at?: string | null;
            /**
             * Format: date-time
             * @description Optional date and time when the refund was completed
             */
            completed_at?: string | null;
            /**
             * Format: date-time
             * @description Optional date and time when the refund was canceled
             */
            canceled_at?: string | null;
            /**
             * Format: date-time
             * @description Optional date and time when the refund failed
             */
            failed_at?: string | null;
        };
        /**
         * @description Represents the current status of a refund in the system
         * @enum {string}
         */
        RefundStatus: "created" | "approved" | "processing" | "completed" | "canceled" | "failed";
        ResendCommandsForGameServerRequestDto: {
            /** Format: date-time */
            starts_at?: string | null;
            /** Format: date-time */
            ends_at?: string | null;
            inventory_item_id?: components["schemas"]["FlakeId"];
            customer_id?: components["schemas"]["FlakeId"];
            order_id?: components["schemas"]["FlakeId"];
            product_id?: components["schemas"]["FlakeId"];
            subscription_id?: components["schemas"]["FlakeId"];
        };
        ResendCommandsForGameServerResponseDto: {
            /** Format: int32 */
            enqueued_commands_count: number;
        };
        /** @description Object representing a sales tax jurisdiction and its associated taxes. */
        SalesTaxJurisdictionDto: {
            /**
             * @description The name of the tax jurisdiction.
             * @example EU OSS
             */
            name: string;
            /** @description List of taxes applied within this jurisdiction. */
            taxes: components["schemas"]["SalesTaxJurisdictionTaxDto"][];
            /** @description Explanation for why taxes are not applied, if applicable.
             *     This property is null when taxes are applied. */
            not_taxed_reason?: string | null;
        };
        /** @description Object representing a specific tax within a sales tax jurisdiction. */
        SalesTaxJurisdictionTaxDto: {
            /** @description The name of the tax. */
            tax_name: string;
            /** @description The amount subject to taxation, formatted as a string. */
            taxable_amount: string;
            /** @description The calculated tax amount, formatted as a string. */
            tax_amount: string;
            /** @description The rate at which the tax is applied, formatted as a string. */
            tax_rate: string;
        };
        SetDiscordActionDto: {
            discord_server_id: components["schemas"]["FlakeId"];
            action_type: components["schemas"]["DiscordActionType"];
            execution_stage: components["schemas"]["DiscordActionExecutionStage"];
            revocation_stages?: components["schemas"]["DiscordActionRevocationStage"][] | null;
            channel_id?: components["schemas"]["FlakeId"];
            role_id?: components["schemas"]["FlakeId"];
            message?: string | null;
        };
        StartDataMigrationFromTebexRequestDto: {
            /** @description The public-facing Headless API token. */
            headless_token: string;
            /** @description An API token associated to a Tebex game server. */
            plugin_token: string;
        };
        StartDownloadableFileUploadRequestDto: {
            file_name: string;
            file_content_type: string;
            description?: string | null;
        };
        /** @description Represents a Steam profile for a customer. */
        SteamProfileDto: {
            /**
             * @description The 64-bit Steam ID of the user.
             * @example 76561198045784099
             */
            id: string;
            /** @description The display name of the user on Steam. */
            name: string;
            /** @description The URL to the user's Steam avatar image. */
            avatar_url: string;
        };
        StorePricingRegionOverrideDto: {
            /** Format: int64 */
            default_price_multiplier?: number | null;
            enabled?: boolean | null;
            currency?: string | null;
            tax_inclusive?: boolean | null;
        };
        /** @description Data transfer object representing a store subscription. */
        StoreSubscriptionDto: {
            id: components["schemas"]["FlakeId"];
            /** @description Human-readable identifier for the subscription. */
            pretty_id: string;
            store_id: components["schemas"]["FlakeId"];
            customer: components["schemas"]["CustomerDto"];
            payment_method_id?: components["schemas"]["FlakeId"];
            status: components["schemas"]["SubscriptionStatus"];
            coupon_id?: components["schemas"]["FlakeId"];
            /**
             * Format: date-time
             * @description Date when a repeating coupon ends for this subscription.
             */
            coupon_repeating_ends_at?: string | null;
            affiliate_id?: components["schemas"]["FlakeId"];
            checkout_id?: components["schemas"]["FlakeId"];
            checkout_line_id?: components["schemas"]["FlakeId"];
            /** @description Name used for billing purposes. */
            billing_name?: string | null;
            /** @description Email used for billing purposes. */
            billing_email?: string | null;
            /** @description Country code used for billing purposes. */
            billing_country?: string | null;
            /** @description List of tax jurisdictions applicable to this subscription. */
            tax_jurisdictions: components["schemas"]["SalesTaxJurisdictionDto"][];
            /** @description IP address of the customer at the time of subscription. */
            customer_ip?: string | null;
            /** @description Indicates whether this subscription is a gift. */
            gift: boolean;
            gift_to_customer?: components["schemas"]["CustomerDto"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            /** @description Name of the product associated with this subscription. */
            product_name: string;
            /** @description URL for the product image. */
            product_image_url?: string | null;
            /**
             * Format: int32
             * @description Numeric value of the billing interval.
             */
            interval_value: number;
            interval_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Currency code used for billing this subscription. */
            currency: string;
            /** @description Indicates whether tax is included in the base price itself. */
            tax_inclusive: boolean;
            /**
             * Format: int64
             * @description Base price of the subscription in smallest currency units (e.g., cents).
             */
            price: number;
            /** @description Formatted string representation of the price. */
            price_str: string;
            /**
             * Format: int64
             * @description Amount of discount applied in smallest currency units.
             */
            discount_amount: number;
            /** @description Formatted string representation of the discount amount. */
            discount_amount_str: string;
            /**
             * Format: int64
             * @description Subtotal amount in smallest currency units.
             */
            subtotal_amount: number;
            /** @description Formatted string representation of the subtotal amount. */
            subtotal_amount_str: string;
            /**
             * Format: int64
             * @description Tax amount in smallest currency units.
             */
            tax_amount: number;
            /** @description Formatted string representation of the tax amount. */
            tax_amount_str: string;
            /**
             * Format: int64
             * @description Total amount in smallest currency units.
             */
            total_amount: number;
            /** @description Formatted string representation of the total amount. */
            total_amount_str: string;
            /**
             * Format: int64
             * @description Initial discount amount in smallest currency units for the first billing cycle.
             */
            initial_discount_amount: number;
            /** @description Formatted string representation of the initial discount amount. */
            initial_discount_amount_str: string;
            /**
             * Format: int64
             * @description Initial subtotal amount in smallest currency units for the first billing cycle.
             */
            initial_subtotal_amount: number;
            /** @description Formatted string representation of the initial subtotal amount. */
            initial_subtotal_amount_str: string;
            /**
             * Format: int64
             * @description Initial gift card usage amount in smallest currency units.
             */
            initial_giftcard_usage_amount: number;
            /** @description Formatted string representation of the initial gift card usage amount. */
            initial_giftcard_usage_amount_str: string;
            /**
             * Format: int64
             * @description Initial tax amount in smallest currency units for the first billing cycle.
             */
            initial_tax_amount: number;
            /** @description Formatted string representation of the initial tax amount. */
            initial_tax_amount_str: string;
            /**
             * Format: int64
             * @description Initial total amount in smallest currency units for the first billing cycle.
             */
            initial_total_amount: number;
            /** @description Formatted string representation of the initial total amount. */
            initial_total_amount_str: string;
            /** @description Identifier for the pricing region associated with this subscription. */
            pricing_region_id?: string | null;
            /**
             * Format: date-time
             * @description Start date of the current billing period.
             */
            current_period_start?: string | null;
            /**
             * Format: date-time
             * @description End date of the current billing period.
             */
            current_period_end?: string | null;
            /**
             * Format: int32
             * @description Sequence number of the current billing cycle.
             */
            billing_cycle_sequence?: number | null;
            /**
             * Format: date-time
             * @description Date and time when the next payment attempt will occur.
             */
            next_attempt_at?: string | null;
            /**
             * Format: int32
             * @description Number of payment attempts made for the current billing cycle.
             */
            attempt_count?: number | null;
            /**
             * Format: date-time
             * @description Date and time when the subscription was created.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description Date and time when the subscription was last updated.
             */
            updated_at?: string | null;
            /**
             * Format: date-time
             * @description Date and time when the subscription became active.
             */
            active_at?: string | null;
            /**
             * Format: date-time
             * @description Date and time when the subscription was canceled.
             */
            canceled_at?: string | null;
            /** @description Reason provided for cancellation. */
            cancel_reason?: string | null;
        };
        /**
         * @description Represents the current state of a subscription.
         * @enum {string}
         */
        SubscriptionStatus: "created" | "active" | "canceled";
        TrustStoreOnboardingDto: {
            store_id: components["schemas"]["FlakeId"];
            user_id: components["schemas"]["FlakeId"];
            status: components["schemas"]["TrustStoreOnboardingStatus"];
            payout_onboarding_completed: boolean;
            kyc_completed: boolean;
            requires_approval: boolean;
            manually_approved: boolean;
            decline_reason?: string | null;
            requires_action_text?: string | null;
            products_created: boolean;
            kyc_required: boolean;
            gameserver_linked: boolean;
        };
        /** @enum {string} */
        TrustStoreOnboardingStatus: "invalid" | "pending" | "approved" | "declined" | "requires_action" | "under_review";
        UpdateAffiliateLinkDto: {
            enabled?: boolean | null;
            code?: string | null;
            referer_type?: components["schemas"]["AffiliateLinkRefererType"];
            /** Format: int32 */
            tracking_length_days?: number | null;
            apply_for_subscriptions?: boolean | null;
            discount_type?: components["schemas"]["AffiliateLinkDiscountType"];
            /** Format: int64 */
            discount_amount?: number | null;
            commission_type?: components["schemas"]["AffiliateLinkCommissionType"];
            /** Format: int64 */
            commission_amount?: number | null;
        };
        UpdateProductSortOrderRequestDto: {
            /** @description An array of product IDs in the order that they should be sorted. */
            product_ids: components["schemas"]["FlakeId"][];
        };
        UpdateWebhookDto: {
            url: string;
            reset_secret: boolean;
            subscribed_to: components["schemas"]["WebhookEventType"];
            discord_description_template?: string | null;
            discord_title?: string | null;
            discord_color?: string | null;
        };
        UpsertBanRequestDto: {
            reason?: string | null;
            identities?: components["schemas"]["BanIdentityDto"][] | null;
            /** Format: date-time */
            expires_at?: string | null;
        };
        /** @description Unified request model for creating or updating custom variables.
         *     Contains all the configurable properties of a custom variable. */
        UpsertCustomVariableRequestDto: {
            /** @description Unique identifier string for programmatic reference.
             *     Must contain only letters, numbers, underscores, and hyphens. */
            identifier: string;
            /** @description Display name shown to customers. */
            name: string;
            /** @description Description explaining the purpose of this custom variable. */
            description?: string | null;
            type: components["schemas"]["CustomVariableType"];
            /** @description Optional regex pattern for validating customer input.
             *     Only applies to text and number types. Ignored for dropdown types. */
            value_regex?: string | null;
            /** @description Predefined options for dropdown-type custom variables.
             *     Required for dropdown types, ignored for text and number types.
             *     When updating, this completely replaces all existing options. */
            options: components["schemas"]["CustomVariableOptionRequestDto"][];
        };
        UpsertCustomerRequestDto: {
            /** @description The Steam platform identifier (Steam ID 64) for the customer. */
            steam_id?: string | null;
            /** @description The Minecraft UUID for the customer. */
            minecraft_uuid?: string | null;
            minecraft_platform?: components["schemas"]["CustomerMinecraftPlatform"];
            /** @description The Xbox XUID (Xbox User ID) for the customer. */
            xbox_xuid?: string | null;
            /** @description The name of the customer. */
            name?: string | null;
            /** @description Additional customer information stored as key-value pairs. */
            metadata?: {
                [key: string]: string;
            } | null;
        };
        /** @description Data transfer object used for creating new global commands or updating existing ones.
         *     Supports partial updates following PATCH semantics. */
        UpsertGlobalCommandDto: {
            stage: components["schemas"]["ProductCommandStage"];
            /** @description The command content to be executed. */
            content: string;
            /** @description Indicates whether the command should only be executed when the player is online. */
            online_only: boolean;
            /** @description List of specific game server IDs where this command should be executed. */
            override_execute_on_gameserver_ids?: components["schemas"]["FlakeId"][] | null;
        };
        UpsertProductRequestDto: {
            /** @description The unique URL-safe identifier (slug) for the product. */
            slug?: string | null;
            /** @description The display name of the product. */
            name?: string | null;
            /** @description The detailed description of the product. */
            description?: string | null;
            /** @description The display label for the product. */
            label?: string | null;
            /**
             * Format: int64
             * @description The price of the product in the lowest denominator (e.g. cents).
             */
            price?: number | null;
            /** @description Indicates whether the customer is prompted to select a game server before purchasing. */
            single_game_server_only?: boolean | null;
            /** @description Indicates whether one-time purchases are allowed. */
            allow_one_time_purchase?: boolean | null;
            /** @description Indicates whether subscription purchases are allowed. */
            allow_subscription?: boolean | null;
            /**
             * Format: int32
             * @description The subscription interval value.
             */
            subscription_interval_value?: number | null;
            subscription_interval_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Indicates whether automatic removal is enabled. */
            remove_after_enabled?: boolean | null;
            /**
             * Format: int32
             * @description The time value for automatic removal.
             */
            remove_after_time_value?: number | null;
            remove_after_time_scale?: components["schemas"]["ProductRemoveAfterIntervalScale"];
            store_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            customer_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            /** @description Indicates whether removed items should be excluded from stock limits. */
            stock_limit_do_not_include_removed?: boolean | null;
            /** @description The tag IDs associated with the product. */
            tags?: components["schemas"]["FlakeId"][] | null;
            /** @description The gameserver IDs associated with the product. */
            gameservers?: components["schemas"]["FlakeId"][] | null;
            /** @description The commands to be executed at different stages. */
            commands?: components["schemas"]["ProductCommandDto"][] | null;
            deliverable_actions?: components["schemas"]["ProductDeliverableActionsDto"];
            /** @description Additional metadata for the product. */
            metadata?: {
                [key: string]: string;
            } | null;
            /** @description The payout splits for revenue distribution.
             *     Requires special approval. */
            payout_splits?: components["schemas"]["ProductPayoutSplitDto"][] | null;
            tax_code?: components["schemas"]["ProductTaxCode"];
            /** @description Indicates whether concurrent active items are allowed. */
            allow_concurrent_active_items?: boolean | null;
            /** @description Indicates whether using coupons and gift cards on this product is allowed. */
            disable_promo_codes?: boolean | null;
            /** @description Indicates whether the product is hidden. */
            is_hidden?: boolean | null;
            /** @description Indicates whether gifting is disabled. */
            is_gifting_disabled?: boolean | null;
            /**
             * Format: date-time
             * @description The date and time when the product becomes enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_at?: string | null;
            /**
             * Format: date-time
             * @description The date and time until which the product remains enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_until?: string | null;
            /** @description The IDs of products required for purchasing this product. */
            required_product_ids?: components["schemas"]["FlakeId"][] | null;
            /** @description Indicates whether all required products are needed. */
            required_product_all?: boolean | null;
            /** @description The IDs of associated custom variables. */
            custom_variable_ids?: components["schemas"]["FlakeId"][] | null;
        };
        /** @description A validation error. */
        ValidationError: {
            /** @description The parseable error code. */
            code: string;
            /** @description The human-readable error message. */
            message: string;
            /** @description The path leading to the validation error. */
            path: string;
            /** @description Type of the validation that failed. */
            validation: string;
        };
        /** @enum {string} */
        WebhookEventType: "on_ignore" | "on_order_completed" | "on_refund" | "on_chargeback" | "on_delivery_item_added" | "on_delivery_item_activated" | "on_delivery_item_used" | "on_delivery_item_revoked" | "on_subscription_activated" | "on_subscription_renewed" | "on_subscription_canceled" | "on_discord_order_actions_queued" | "on_connected_user_registered" | "on_connected_user_became_payable" | "on_connected_user_payout_created" | "on_connected_user_payout_completed" | "on_connected_user_transaction_inserted" | "on_connected_user_became_unpayable";
        WebhookHistoryDto: {
            /** Format: int32 */
            page: number;
            history: components["schemas"]["QueuedWebhookDto"][];
        };
        /** @enum {string} */
        WebhookState: "success" | "pending" | "failed" | "all";
        WebhookSubscriptionDto: {
            id: components["schemas"]["FlakeId"];
            url: string;
            secret: string;
            subscribed_to: components["schemas"]["WebhookEventType"];
            type: components["schemas"]["WebhookType"];
            discord_description_template?: string | null;
            discord_title?: string | null;
            discord_color?: string | null;
        };
        /** @enum {string} */
        WebhookType: "json_v1" | "discord_v1";
        WebhookVariablesDto: {
            event_type: components["schemas"]["WebhookEventType"];
            variables: string[];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AffiliateLinks_GetAffiliateLinks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliateLinkDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    AffiliateLinks_CreateAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateAffiliateLinkDto"];
                "text/json": components["schemas"]["CreateAffiliateLinkDto"];
                "application/*+json": components["schemas"]["CreateAffiliateLinkDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliateLinkDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    AffiliateLinks_GetAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                affiliateLinkId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliateLinkDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    AffiliateLinks_DeleteAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                affiliateLinkId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    AffiliateLinks_UpdateAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                affiliateLinkId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateAffiliateLinkDto"];
                "text/json": components["schemas"]["UpdateAffiliateLinkDto"];
                "application/*+json": components["schemas"]["UpdateAffiliateLinkDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliateLinkDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Bans_GetBans: {
        parameters: {
            query?: {
                ban_type?: components["schemas"]["BanType"];
                ban_type_value?: string;
                reason?: string;
                /** @description The maximum number of items to return in a single request. */
                limit?: number;
                /**
                 * @description Returns items after the specified ID.
                 *     Used for forward pagination through results.
                 * @example null
                 */
                after?: number;
                /**
                 * @description Returns items before the specified ID.
                 *     Used for backward pagination through results.
                 * @example null
                 */
                before?: number;
                /** @description Determines the sort order of returned items.
                 *     When true, items are returned in ascending order.
                 *     When false, items are returned in descending order. */
                asc?: boolean;
            };
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BanDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Bans_CreateBan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertBanRequestDto"];
                "text/json": components["schemas"]["UpsertBanRequestDto"];
                "application/*+json": components["schemas"]["UpsertBanRequestDto"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BanDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Bans_GetBan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                banId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BanDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Bans_DeleteBan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                banId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Bans_UpdateBan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                banId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertBanRequestDto"];
                "text/json": components["schemas"]["UpsertBanRequestDto"];
                "application/*+json": components["schemas"]["UpsertBanRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BanDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Bans_CheckForBanByIdentities: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CheckForBanIDByIdentitiesRequestDto"];
                "text/json": components["schemas"]["CheckForBanIDByIdentitiesRequestDto"];
                "application/*+json": components["schemas"]["CheckForBanIDByIdentitiesRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CheckForBanIDByIdentitiesRequestDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreCheckouts_CreateCheckoutSession: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateCheckoutSessionManagementDto"];
                "text/json": components["schemas"]["CreateCheckoutSessionManagementDto"];
                "application/*+json": components["schemas"]["CreateCheckoutSessionManagementDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateCheckoutSessionResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreCoupons_GetCouponsForStore: {
        parameters: {
            query?: {
                /** @description The maximum number of items to return in a single request. */
                limit?: number;
                /**
                 * @description Returns items after the specified ID.
                 *     Used for forward pagination through results.
                 * @example null
                 */
                after?: number;
                /**
                 * @description Returns items before the specified ID.
                 *     Used for backward pagination through results.
                 * @example null
                 */
                before?: number;
                /** @description Determines the sort order of returned items.
                 *     When true, items are returned in ascending order.
                 *     When false, items are returned in descending order. */
                asc?: boolean;
            };
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CouponDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreCoupons_CreateCouponForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["CouponDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["CouponDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["CouponDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CouponDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreCoupons_GetCouponByIdForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                couponId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CouponDto"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreCoupons_DeleteCouponForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                couponId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreCoupons_UpdateCouponForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                couponId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["CouponDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["CouponDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["CouponDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CouponDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    CustomVariables_GetCustomVariablesForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to retrieve custom variables for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomVariableDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    CustomVariables_CreateCustomVariableForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to create the custom variable in. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        /** @description The custom variable data to create. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomVariableRequestDto"];
                "text/json": components["schemas"]["UpsertCustomVariableRequestDto"];
                "application/*+json": components["schemas"]["UpsertCustomVariableRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomVariableDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    CustomVariables_GetCustomVariableByIdForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store the custom variable belongs to. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the custom variable to retrieve. */
                customVariableId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomVariableDto"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    CustomVariables_DeleteCustomVariableForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store the custom variable belongs to. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the custom variable to delete. */
                customVariableId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    CustomVariables_UpdateCustomVariableForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store the custom variable belongs to. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the custom variable to update. */
                customVariableId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        /** @description The custom variable data to update with field mask. */
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertCustomVariableRequestDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertCustomVariableRequestDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertCustomVariableRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomVariableDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_GetCustomers: {
        parameters: {
            query?: {
                /** @description The maximum number of items to return in a single request. */
                limit?: number;
                /**
                 * @description Returns items after the specified ID.
                 *     Used for forward pagination through results.
                 * @example null
                 */
                after?: number;
                /**
                 * @description Returns items before the specified ID.
                 *     Used for backward pagination through results.
                 * @example null
                 */
                before?: number;
                /** @description Determines the sort order of returned items.
                 *     When true, items are returned in ascending order.
                 *     When false, items are returned in descending order. */
                asc?: boolean;
                search?: string;
            };
            header?: never;
            path: {
                /** @description The ID of the store to retrieve customers for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_CreateCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to create the customer for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomerRequestDto"];
                "text/json": components["schemas"]["UpsertCustomerRequestDto"];
                "application/*+json": components["schemas"]["UpsertCustomerRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_GetCustomerById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to retrieve the customer for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the customer. */
                customerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_UpdateCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to update the customer for. */
                storeId: components["schemas"]["FlakeId"];
                customerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertCustomerRequestDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertCustomerRequestDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertCustomerRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_CreateCustomerToken: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to generate the customer token for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the customer to generate the customer token for. */
                customerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerTokenResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_InvalidateCustomerTokens: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to invalidate the customer tokens for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the customer to invalidate the customer tokens for. */
                customerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_LookupCustomer: {
        parameters: {
            query?: {
                /** @description Looks up customer by PayNow Customer ID. */
                id?: string;
                /** @description Looks up customer by Steam ID 64. */
                steam_id?: string;
                /** @description Looks up customer by a Minecraft UUID. */
                minecraft_uuid?: string;
                /** @description Looks up customer by an Xbox XUID. */
                xbox_xuid?: string;
                /** @description Looks up customer by Minecraft Java name. */
                minecraft_java_name?: string;
                /** @description Looks up customer by Minecraft Bedrock name. */
                minecraft_bedrock_name?: string;
                /** @description Looks up customer by a PayNow Customer Name.
                 *     Name has to be explicitly set in the Customer entity - profile names won't be matched. */
                name?: string;
            };
            header?: never;
            path: {
                /** @description The ID of the store to retrieve the customer for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customers_BulkCreateCustomers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to create the customers for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomerRequestDto"][];
                "text/json": components["schemas"]["UpsertCustomerRequestDto"][];
                "application/*+json": components["schemas"]["UpsertCustomerRequestDto"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DataMigrations_GetDataMigrations: {
        parameters: {
            query?: {
                /** @description The maximum number of items to return in a single request. */
                limit?: number;
                /**
                 * @description Returns items after the specified ID.
                 *     Used for forward pagination through results.
                 * @example null
                 */
                after?: number;
                /**
                 * @description Returns items before the specified ID.
                 *     Used for backward pagination through results.
                 * @example null
                 */
                before?: number;
                /** @description Determines the sort order of returned items.
                 *     When true, items are returned in ascending order.
                 *     When false, items are returned in descending order. */
                asc?: boolean;
            };
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataMigrationTaskDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DataMigrations_StartDataMigrationFromTebex: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StartDataMigrationFromTebexRequestDto"];
                "text/json": components["schemas"]["StartDataMigrationFromTebexRequestDto"];
                "application/*+json": components["schemas"]["StartDataMigrationFromTebexRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataMigrationTaskDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Deliverables_ResendCommandsForGameServer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                deliverableId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ResendCommandsForGameServerRequestDto"];
                "text/json": components["schemas"]["ResendCommandsForGameServerRequestDto"];
                "application/*+json": components["schemas"]["ResendCommandsForGameServerRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResendCommandsForGameServerResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsDiscord_GetActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productVersionId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordActionDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsDiscord_CreateAction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productVersionId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SetDiscordActionDto"][];
                "text/json": components["schemas"]["SetDiscordActionDto"][];
                "application/*+json": components["schemas"]["SetDiscordActionDto"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordActionDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    OrdersDiscord_GetLinkedDiscordAccounts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                orderId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: components["schemas"]["DiscordProfileDto"];
                    };
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    OrdersDiscord_GetDiscordActionExecutionHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                orderId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QueuedDiscordActionDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordInventoryItem_GetQueuedDiscordActionForDeliveryItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                inventoryItemId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QueuedDiscordActionDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordInventoryItem_GetUserToDeliveryItemLinks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                inventoryItemId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordProfileDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordInventoryItem_SetUserToDeliveryItemLink: {
        parameters: {
            query?: {
                discordUserId?: number;
            };
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                inventoryItemId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordInventoryItem_DeleteUserToDeliveryItemLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                inventoryItemId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordServers_GetDiscordServerLinks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordServerLinkDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordServers_CreateDiscordServerLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordServerLinkDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordServers_DeleteDiscordServerLinks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordServerLinkDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordServers_GetDiscordServerRoles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                discordServerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordServerRoleDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    DiscordServers_GetDiscordServerTextChannels: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                discordServerId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordServerChannelDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsDownloadableFile_GetDownloadableFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDownloadableFileDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsDownloadableFile_StartDownloadableFileUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StartDownloadableFileUploadRequestDto"];
                "text/json": components["schemas"]["StartDownloadableFileUploadRequestDto"];
                "application/*+json": components["schemas"]["StartDownloadableFileUploadRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsDownloadableFile_FinishDownloadableFileUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productId: components["schemas"]["FlakeId"];
                downloadableFileId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsDownloadableFile_CreateDownloadUrl: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productId: components["schemas"]["FlakeId"];
                downloadableFileId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateDownloadableFileDownloadUrlResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsDownloadableFile_DeleteDownloadableFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productId: components["schemas"]["FlakeId"];
                downloadableFileId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    GlobalCommands_GetGlobalCommands: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to retrieve this data for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GlobalCommandDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    GlobalCommands_CreateGlobalCommand: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to create this data for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertGlobalCommandDto"];
                "text/json": components["schemas"]["UpsertGlobalCommandDto"];
                "application/*+json": components["schemas"]["UpsertGlobalCommandDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GlobalCommandDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    GlobalCommands_DeleteGlobalCommand: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to delete this data for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the command to delete. */
                globalCommandId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    GlobalCommands_UpdateGlobalCommand: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to update this data for. */
                storeId: components["schemas"]["FlakeId"];
                globalCommandId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertGlobalCommandDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertGlobalCommandDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertGlobalCommandDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GlobalCommandDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreAbandonedCheckouts_GetStoreAbandonedCheckoutConfigurationOptions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AbandonedCheckoutStoreConfigurationDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StoreAbandonedCheckouts_SetStoreAbandonedCheckoutConfigurationOptions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AbandonedCheckoutStoreConfigurationUpdateDto"];
                "text/json": components["schemas"]["AbandonedCheckoutStoreConfigurationUpdateDto"];
                "application/*+json": components["schemas"]["AbandonedCheckoutStoreConfigurationUpdateDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AbandonedCheckoutStoreConfigurationDto"];
                };
            };
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StorePurchaseFollowUps_GetStorePurchaseFollowUpConfigurationOptions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PurchaseFollowUpStoreConfigurationDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    StorePurchaseFollowUps_SetStorePurchaseFollowUpConfigurationOptions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PurchaseFollowUpStoreConfigurationUpdateDto"];
                "text/json": components["schemas"]["PurchaseFollowUpStoreConfigurationUpdateDto"];
                "application/*+json": components["schemas"]["PurchaseFollowUpStoreConfigurationUpdateDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PurchaseFollowUpStoreConfigurationDto"];
                };
            };
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Orders_GetOrders: {
        parameters: {
            query?: {
                /** @description The maximum number of items to return in a single request. */
                limit?: number;
                /**
                 * @description Returns items after the specified ID.
                 *     Used for forward pagination through results.
                 * @example null
                 */
                after?: number;
                /**
                 * @description Returns items before the specified ID.
                 *     Used for backward pagination through results.
                 * @example null
                 */
                before?: number;
                /** @description Determines the sort order of returned items.
                 *     When true, items are returned in ascending order.
                 *     When false, items are returned in descending order. */
                asc?: boolean;
                /** @description List of order statuses to filter by */
                status?: components["schemas"]["OrderStatus"][];
                /** @description Order ID */
                order_id?: components["schemas"]["FlakeId"];
                /** @description Customer ID */
                customer_id?: components["schemas"]["FlakeId"];
                /** @description Subscription ID */
                subscription_id?: components["schemas"]["FlakeId"];
                /** @description Checkout ID */
                checkout_id?: components["schemas"]["FlakeId"];
                /** @description Flag indicating if the order is a subscription */
                is_subscription?: boolean;
                /** @description Affiliate ID */
                affiliate_id?: components["schemas"]["FlakeId"];
                /** @description Coupon ID */
                coupon_id?: components["schemas"]["FlakeId"];
                /** @description Gift card ID */
                giftcard_id?: components["schemas"]["FlakeId"];
                /** @description Product ID */
                product_id?: components["schemas"]["FlakeId"];
                /** @description Sale ID */
                sale_id?: components["schemas"]["FlakeId"];
            };
            header?: never;
            path: {
                /** @description The ID of the store to retrieve orders for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrderDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Orders_GetOrderById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to retrieve the order for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the order. */
                orderId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrderDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Orders_RefundOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to refund the order for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the order. */
                orderId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateRefundRequestDto"];
                "text/json": components["schemas"]["CreateRefundRequestDto"];
                "application/*+json": components["schemas"]["CreateRefundRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RefundDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_GetProducts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to retrieve products for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_CreateProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to create the product in. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertProductRequestDto"];
                "text/json": components["schemas"]["UpsertProductRequestDto"];
                "application/*+json": components["schemas"]["UpsertProductRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_GetProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store the product belongs to. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the product to retrieve. */
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_DeleteProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store the product belongs to. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the product to delete. */
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_UpdateProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store the product belongs to. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the product to update. */
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertProductRequestDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertProductRequestDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpsertProductRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_UpdateProductSortOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to update product sort order in. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateProductSortOrderRequestDto"];
                "text/json": components["schemas"]["UpdateProductSortOrderRequestDto"];
                "application/*+json": components["schemas"]["UpdateProductSortOrderRequestDto"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsPricing_GetProductPricingRegions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductPricingRegionDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsPricing_SetProductPricingRegionOverride: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                productId: components["schemas"]["FlakeId"];
                regionId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["ProductPricingRegionOverrideDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["ProductPricingRegionOverrideDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["ProductPricingRegionOverrideDto"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsPricing_GetStorePricingRegions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductPricingRegionDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsPricing_SetStorePricingRegionOverride: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                regionId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["StorePricingRegionOverrideDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["StorePricingRegionOverrideDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["StorePricingRegionOverrideDto"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    ProductsPricing_GetStorePricingRegionGroups: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductPricingRegionGroupDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    TrustStoreOnboarding_GetStoreOnboardingStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TrustStoreOnboardingDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Subscriptions_GetSubscriptions: {
        parameters: {
            query?: {
                store_id?: components["schemas"]["FlakeId"];
                customer_id?: components["schemas"]["FlakeId"];
                subscription_id?: components["schemas"]["FlakeId"];
                billing_email?: string;
                payment_method_id?: components["schemas"]["FlakeId"];
                checkout_id?: components["schemas"]["FlakeId"];
                status?: components["schemas"]["SubscriptionStatus"][];
                /** @description The maximum number of items to return in a single request. */
                limit?: number;
                /**
                 * @description Returns items after the specified ID.
                 *     Used for forward pagination through results.
                 * @example null
                 */
                after?: number;
                /**
                 * @description Returns items before the specified ID.
                 *     Used for backward pagination through results.
                 * @example null
                 */
                before?: number;
                /** @description Determines the sort order of returned items.
                 *     When true, items are returned in ascending order.
                 *     When false, items are returned in descending order. */
                asc?: boolean;
            };
            header?: never;
            path: {
                /** @description The ID of the store to retrieve subscriptions for. */
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StoreSubscriptionDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Subscriptions_GetSubscriptionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to retrieve the subscription for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the subscription. */
                subscriptionId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StoreSubscriptionDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Subscriptions_CancelSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the store to cancel the subscription for. */
                storeId: components["schemas"]["FlakeId"];
                /** @description The ID of the subscription. */
                subscriptionId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Tags_GetTagImageUploadUrl: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                tagId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetTagImageUploadUrlResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Tags_FinishTagImageUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                tagId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["FinishTagImageUploadUrlRequestDto"];
                "text/json": components["schemas"]["FinishTagImageUploadUrlRequestDto"];
                "application/*+json": components["schemas"]["FinishTagImageUploadUrlRequestDto"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Tags_DeleteTagImage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                tagId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Webhooks_GetSubscriptions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Webhooks_CreateSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateWebhookDto"];
                "text/json": components["schemas"]["CreateWebhookDto"];
                "application/*+json": components["schemas"]["CreateWebhookDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Webhooks_GetVariables: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookVariablesDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Webhooks_DeleteSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                webhookId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Webhooks_UpdateSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                webhookId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpdateWebhookDto"];
                "text/json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpdateWebhookDto"];
                "application/*+json": {
                    [key: string]: unknown;
                } & components["schemas"]["UpdateWebhookDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Webhooks_GetHistory: {
        parameters: {
            query?: {
                page?: number;
                state?: string;
            };
            header?: never;
            path: {
                storeId: components["schemas"]["FlakeId"];
                webhookId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookHistoryDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
}
