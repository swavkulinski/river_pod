module.exports = {
  Sidebar: [
    "whats_new",
    "3.0_migration",
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      items: ["introduction/why_riverpod", "introduction/getting_started"],
    },
    {
      type: "category",
      label: "Riverpod for Provider Users",
      items: [
        "from_provider/quickstart",
        "from_provider/provider_vs_riverpod",
        "from_provider/motivation/motivation",
      ],
    },
    {
      type: "category",
      label: "References",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "All Providers",
          items: [
            {
              type: "link",
              label: "Provider",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/Provider-class.html",
            },
            {
              type: "link",
              label: "FutureProvider",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/FutureProvider-class.html",
            },
            {
              type: "link",
              label: "StreamProvider",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/StreamProvider-class.html",
            },
            {
              type: "link",
              label: "NotifierProvider",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/NotifierProvider-class.html",
            },
            {
              type: "link",
              label: "AsyncNotifierProvider",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/AsyncNotifierProvider-class.html",
            },
            {
              type: "link",
              label: "StreamNotifierProvider",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/StreamNotifierProvider-class.html",
            },
            // Legacy
            {
              type: "link",
              label: "ChangeNotifierProvider (legacy)",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/legacy/ChangeNotifierProvider-class.html",
            },
            {
              type: "link",
              label: "StateNotifierProvider (legacy)",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/legacy/StateNotifierProvider-class.html",
            },
            {
              type: "link",
              label: "StateProvider (legacy)",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/legacy/StateProvider-class.html",
            },
          ],
        },
        {
          type: "category",
          label: "Containers/Scopes",
          items: [
            {
              type: "link",
              label: "ProviderContainer",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/ProviderContainer-class.html",
            },
            {
              type: "link",
              label: "ProviderScope",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/ProviderScope-class.html",
            },
            {
              type: "link",
              label: "UncontrolledProviderScope",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/UncontrolledProviderScope-class.html",
            },
          ],
        },
        {
          type: "category",
          label: "Refs",
          items: [
            {
              type: "link",
              label: "Ref",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/Ref-class.html",
            },
            {
              type: "link",
              label: "WidgetRef",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/WidgetRef-class.html",
            },
          ],
        },
        {
          type: "category",
          label: "Consumers",
          items: [
            {
              type: "link",
              label: "ConsumerWidget",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/ConsumerWidget-class.html",
            },
            {
              type: "link",
              label: "ConsumerStatefulWidget",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/ConsumerStatefulWidget-class.html",
            },
            {
              type: "link",
              label: "Consumer",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/Consumer-class.html",
            },
          ],
        },
        {
          type: "category",
          label: "Offline persistence (experimental)",
          items: [
            {
              type: "link",
              label: "Storage (experimental)",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/experimental_persist/Storage-class.html",
            },
            {
              type: "link",
              label: "Persistable (experimental)",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/experimental_persist/Persistable-mixin.html",
            },
          ],
        },
        {
          type: "category",
          label: "core",
          items: [
            {
              type: "link",
              label: "AsyncValue",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/AsyncValue-class.html",
            },
            {
              type: "link",
              label: "ProviderObserver",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/ProviderObserver-class.html",
            },
            {
              type: "link",
              label: "ProviderSubscription",
              href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/hooks_riverpod/ProviderSubscription-class.html",
            },
          ],
        },

        {
          type: "link",
          label: "misc",
          href: "https://pub.dev/documentation/hooks_riverpod/3.0.0-dev.16/misc/",
        },
      ],
    },

    {
      type: "category",
      label: "Essentials",
      collapsible: false,
      items: [
        "essentials/first_request",
        "essentials/side_effects",
        "essentials/passing_args",
        "essentials/websockets_sync",
        "essentials/combining_requests",
        "essentials/auto_dispose",
        // {
        //   type: "link",
        //   label: "Progress indicators and error pages (WIP)",
        //   href: "https://github.com/rrousselGit/riverpod/tree/master/examples/marvel",
        // },
        "essentials/eager_initialization",
        "essentials/testing",
        "essentials/provider_observer",
        "essentials/faq",
        "essentials/do_dont",
      ],
    },

    // Case studies
    {
      type: "category",
      label: "Case studies",
      collapsible: false,
      items: ["case_studies/pull_to_refresh", "case_studies/cancel"],
    },

    // Advanced
    {
      type: "category",
      label: "Advanced topics",
      collapsible: false,
      items: [
        // {
        //   type: "link",
        //   label: "Scoping providers (WIP)",
        //   href: "https://github.com/rrousselGit/riverpod/tree/master/examples/marvel",
        // },
        "advanced/select",
      ],
    },

    // Concepts
    {
      type: "category",
      label: "Concepts",
      collapsible: false,
      items: ["concepts/about_code_generation", "concepts/about_hooks"],
    },

    // Migration guides
    {
      type: "category",
      label: "Migration guides",
      collapsible: false,
      items: [
        "migration/from_state_notifier",
        "migration/from_change_notifier",
        "migration/0.14.0_to_1.0.0",
        "migration/0.13.0_to_0.14.0",
      ],
    },

    // Official examples
    {
      type: "category",
      label: "Official examples",
      collapsed: true,
      items: [
        {
          type: "link",
          label: "Counter",
          href: "https://github.com/rrousselGit/riverpod/tree/master/examples/counter",
        },
        {
          type: "link",
          label: "Todo list",
          href: "https://github.com/rrousselGit/riverpod/tree/master/examples/todos",
        },
        {
          type: "link",
          label: "Pub.dev client",
          href: "https://github.com/rrousselGit/riverpod/tree/master/examples/pub",
        },
        {
          type: "link",
          label: "Marvel API",
          href: "https://github.com/rrousselGit/riverpod/tree/master/examples/marvel",
        },
      ],
    },

    // Third party examples
    {
      type: "category",
      label: "Third party examples",
      collapsed: true,
      items: [
        {
          type: "link",
          label:
            "DummyMart: Full CRUD app with authentication + go_router integration",
          href: "https://github.com/dhafinrayhan/dummymart",
        },
        {
          type: "link",
          label: "Easy Todo Riverpod Architecture",
          href: "https://github.com/ilovekimchi6/todo_easy_riverpod_architecture",
        },
        {
          type: "link",
          label: "Android Launcher",
          href: "https://github.com/lohanidamodar/fl_live_launcher",
        },
        {
          type: "link",
          label: "Worldtime Clock",
          href: "https://github.com/lohanidamodar/flutter_worldtime",
        },
        {
          type: "link",
          label: "Dictionary App",
          href: "https://github.com/lohanidamodar/fl_dictio",
        },
        {
          type: "link",
          label: "Time Tracking App (with Firebase)",
          href: "https://github.com/bizz84/starter_architecture_flutter_firebase",
        },
        {
          type: "link",
          label: "Firebase Phone Authentication with Riverpod",
          href: "https://github.com/julienlebren/flutter_firebase_phone_auth_riverpod",
        },
        {
          type: "link",
          label: "ListView paging with search",
          href: "https://github.com/tbm98/flutter_loadmore_search",
        },
        {
          type: "link",
          label: "Resocoder's Weather Bloc to Weather Riverpod V2",
          href: "https://github.com/coyksdev/flutter-bloc-library-v1-tutorial",
        },
        {
          type: "link",
          label: "Blood Pressure Tracker App",
          href: "https://github.com/UrosTodosijevic/blood_pressure_tracker",
        },
        {
          type: "link",
          label:
            "Firebase Authentication with Riverpod Following Flutter DDD Architecture Pattern",
          href: "https://github.com/pythonhubpy/firebase_authentication_flutter_DDD",
        },
        {
          type: "link",
          label: "Todo App with Backup and Restore feature",
          href: "https://github.com/TheAlphaApp/flutter_riverpod_todo_app",
        },
        {
          type: "link",
          label: "Integrating Hive database with Riverpod (simple example)",
          href: "https://github.com/GitGud31/theme_riverpod_hive",
        },
        {
          type: "link",
          label: "Browser App with Riverpod",
          href: "https://github.com/MarioCroSite/simple_browser_app",
        },
        {
          type: "link",
          label: "GoRouter with Riverpod",
          href: "https://github.com/lucavenir/go_router_riverpod",
        },
        {
          type: "link",
          label: "Piano Chords Test",
          href: "https://github.com/akvus/piano_fun",
        },
        {
          type: "link",
          label: "Movies API App with Caching & Pagination",
          href: "https://github.com/Roaa94/movies_app",
        },
        {
          type: "link",
          label: "AWS Amplify Storage Gallery App with Riverpod & Freezed",
          href: "https://github.com/offlineprogrammer/amplify_storage_app",
        },
        {
          type: "link",
          label: "Clean Architecture demonstration with Riverpod",
          href: "https://github.com/Uuttssaavv/flutter-clean-architecture-riverpod",
        },
        {
          type: "link",
          label: "Delivery App with Google Maps and Live Tracking",
          href: "https://github.com/AhmedLSayed9/deliverzler",
        },
        {
          type: "link",
          label: "ChatGPT Chat App with Riverpod",
          href: "https://github.com/never-inc/chat_gpt_boilerplate",
        },
      ],
    },

    {
      type: "link",
      label: "API reference",
      href: "https://pub.dev/documentation/hooks_riverpod/latest/hooks_riverpod/hooks_riverpod-library.html",
    },

    {
      type: "category",
      label: "Concepts 🚧",
      items: [
        "concepts/providers",
        "concepts/reading",
        "concepts/combining_providers",
        {
          type: "category",
          label: "Modifiers",
          items: [
            "concepts/modifiers/family",
            "concepts/modifiers/auto_dispose",
          ],
        },
        "concepts/provider_observer",
        "concepts/scopes",
        "concepts/provider_lifecycles",
        "concepts/why_immutability",
      ],
    },

    {
      type: "category",
      label: "All Providers 🚧",
      items: [
        "providers/provider",
        "providers/notifier_provider",
        "providers/state_notifier_provider",
        "providers/future_provider",
        "providers/stream_provider",
        "providers/state_provider",
        "providers/change_notifier_provider",
      ],
    },

    {
      type: "category",
      label: "Guides 🚧",
      items: ["cookbooks/testing"],
    },
  ],
};
